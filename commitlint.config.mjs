export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-min-length": [2, "always", 10],
    "type-enum": [
      2,
      "always",
      [
        "feat", // new feature
        "fix", // bug fix
        "docs", // documentation only changes
        "style", // changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
        "refactor", // changes that neither fixes a bug nor adds a feature
        "perf", // changes that improves performance
        "test", // adding missing tests or correcting existing tests
        "chore", // changes to the build process or auxiliary tools and libraries such as documentation generation
        "revert", // reverts a previous commit
        "wip", // work in progress
      ],
    ],
  },
}
