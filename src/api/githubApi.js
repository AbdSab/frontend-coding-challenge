/**
 * Github Repo Api Wrapper
 */
import githubApiParser from "../services/githubApiParser";

const fetchGithubRepos = async (config) => {

    const END_POINT = "https://api.github.com/search/repositories";
    const sort = config.sort || 'star';
    const order = config.order || 'desc';
    const interval = config.interval || 30;
    const page = config.page || '1';

    const buildDate = () => {
        const date = new Date();
        date.setDate(date.getDate() - interval);
        return date.toISOString().split("T")[0];
    }

    const buildQuery = () => {
        let apiUrl = END_POINT+"?";
        apiUrl += "q=created:>"+buildDate();
        apiUrl += "&sort=" + sort;
        apiUrl += "&order=" + order;
        apiUrl += '&page='+page;
        return apiUrl;
    }

    const fetchRepos = async () => {
        const apiUrl = buildQuery();
        const response = await fetch(apiUrl);
        const rawData = await response.json();
        const data = githubApiParser(rawData);
        return data;
    }

    return fetchRepos();
}

export {fetchGithubRepos};