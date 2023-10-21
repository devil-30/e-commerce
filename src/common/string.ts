export const clsx = (...classes: (string | false | null | undefined)[]) => {
    return classes.filter((cls): cls is string => !!cls).join(" ");
  };