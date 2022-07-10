import { Engine, Rule } from "json-rules-engine";

interface SomethingProps {
	rule: Rule;
	fact: Record<string, number>;
}

export const Something = (props: SomethingProps) => {
	const { rule, fact } = props;

	(() => {
		const engine = new Engine();

		engine.addRule(rule);

		engine.run(fact);
	})();

	return <div></div>;
};
