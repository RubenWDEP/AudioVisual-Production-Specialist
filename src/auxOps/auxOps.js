


export const contactAction = async (name, email, comment) => {
    const response = await fetch("http://localhost:4000/sendemail", {
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