import { z } from "zod";

const formatValidationErrors = (issues: z.ZodIssue[]) =>
  issues.map((issue) => ({ [issue.path[0]]: issue.message })).reduce((validationErrors, currentObject) => ({ ...validationErrors, ...currentObject }), {});

export default formatValidationErrors;
