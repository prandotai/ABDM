const getApiBaseUrl = () => {
    const { origin } = window.location;
    let apiBaseUrl = '';
    if (origin.includes('localhost')) {
        apiBaseUrl = 'https://abhasbx.abdm.gov.in/abha/api/v3';
    }else if (origin.includes('dev')) {
        apiBaseUrl = 'https://abhasbx.abdm.gov.in/abha/api/v3';
    } else if (origin.includes('qa')) {
        apiBaseUrl = 'https://abhasbx.abdm.gov.in/abha/api/v3';
    } else if (origin.includes('uat')) {
        apiBaseUrl = 'https://abhasbx.abdm.gov.in/abha/api/v3';
    } else {
        apiBaseUrl = 'https://live';
    }
    return apiBaseUrl;
}

export const API_BASE_URL = getApiBaseUrl();