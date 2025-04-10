const getApiBaseUrl = () => {
    const { origin } = window.location;
    let apiBaseUrl = '';
    if (origin.includes('dev')) {
        apiBaseUrl = 'https://dev-v11.aielectron.ai';
    } else if (origin.includes('qa')) {
        apiBaseUrl = 'https://qa-v11.aielectron.ai';
    } else if (origin.includes('uat')) {
        apiBaseUrl = 'https://uat.aielectron.ai';
    } else {
        apiBaseUrl = 'https://dev-v11.aielectron.ai';
    }
    return apiBaseUrl;
}

export const API_BASE_URL = getApiBaseUrl();