import { Rule, Engine } from "json-rules-engine";

export const getRuleResult = async (
	rule: Rule,
	fact: Record<string, number>
) => {
	const engine = new Engine();

	return await engine
		.addRule(rule)
		.run(fact)
		.then((result) => [...result.results, ...result.failureResults]);
};
