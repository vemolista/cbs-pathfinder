import { ConditionKind } from "../declarations/types";

export const getTopLevelConditionKindOrFalse = (condition: any) => {
	if (condition.any) {
		console.log("condition.any", condition);
		return ConditionKind.TopLevelAny;
	} else if (condition.all) {
		console.log("condition.all", condition);
		return ConditionKind.TopLevelAll;
	} else {
		console.log("condition not top level", condition);
		return ConditionKind.NotTopLevel;
	}
};
