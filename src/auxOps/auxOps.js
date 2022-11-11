


export const contactAction = async (name, email, comment) => {
    const response = await fetch(`${process.env.REACT_APP_API}/sendemail`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, comment }),
    })

    const apiRes = await response.json();
    if (response.ok) {
        return apiRes;
    } else {
        throw new Error(apiRes.message)
    }
}

export const sectionComment = async (userName, comment, sectionCommentName) => {
    const response = await fetch(`${process.env.REACT_APP_API}/comments`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: userName, comment, section: sectionCommentName }),
    }
    )
    const apiRes = await response.json();
    if (response.ok) {
        return apiRes;
    } else {
        throw new Error(apiRes.message)
    }
}

export const getSectionComment = async (sectionCommentName) => {
    const query = new URLSearchParams({ sectionCommentName }).toString();
    const response = await fetch(`${process.env.REACT_APP_API}/getComments?${query}`);
    const apiRes = await response.json();
    apiRes.res = response.ok;

    if (response.ok) {
        return apiRes;
    } else {
        throw new Error(apiRes.message)
    }
}