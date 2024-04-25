
# How to contribute

## Did you find a bug?

If you have problems with the presets or configs working, please post an Issue. A GitHub repository that can reproduce the issue would be greatly appreciated. Also, please include any relevant editor extension versions or settings that may be affected.

## Modify the codes

If you want to modify the code, fork the repository and create a pull request. Please follow the guidelines below.

1. Please open an issue before creating a pull request.
2. Fork the repository.
3. Create a branch for your changes. Branch name should include the issue number.
4. modify the code.
5. commit your changes. We recommend to use [conventional commit](https://www.conventionalcommits.org/ja/v1.0.0/).
6. Run `pnpm run build` at the root of the repository and ensure that there are no errors.
7. Run `pnpm run changeset` at the root of the repository and select the package you want to modify, then input your changes.
8. Congratulations! You are ready to create a pull request.
9. You should include `closes #<issue number>` or `fixes #<issue number>` in the pull request description. It will automatically close the issue when the pull request is merged.
