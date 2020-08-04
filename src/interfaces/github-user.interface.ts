import { GithubUser } from "./githubUser.interface";

export interface GithubUsers {
    total_count:        number;
    incomplete_results: boolean;
    items:              GithubUser[];
}