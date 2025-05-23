import NgrokCard from "./NgrokCard";
import { useIntegration } from "./integrations/use-integrations";

type Props = {
	name: string;
};

export default function IntegrationPageList({ name }: Props) {
	const integration = useIntegration(name);

	if (!integration) {
		return null;
	}

	return (
		<ul className="m-0 mb-5 grid list-none grid-cols-2 gap-5 p-0">
			{integration.docs.map((doc) => (
				<li className="last-of-type:col-span-full" key={doc.path}>
					<NgrokCard
						to={doc.path}
						size="sm"
						title={doc.frontMatter?.title || doc.contentTitle || "Integration"}
						description={doc.frontMatter?.description || doc.excerpt}
					/>
				</li>
			))}
		</ul>
	);
}
