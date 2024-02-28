import { GITHUB_REPO_URL } from "@/lib/constants";
import { GitHub } from "react-feather";

import styles from "./GitHubLogo.module.css";

export const GitHubLogo = () => {
  return (
    <a className={styles.container} href={GITHUB_REPO_URL} target="_blank">
      <GitHub />
    </a>
  );
};
