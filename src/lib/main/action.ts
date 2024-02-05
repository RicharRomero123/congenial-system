"use server";

export const contactAction = async (formData: any) => {
  try {
    const requestBody = {
      name: formData.name,
      email: formData.email,
      personType: formData.personType,
      phone: formData.phone.toString(), 
      question: formData.question,
      ...(formData.personType === "COMPANY" ? { companyName: formData.companyName } : {}),
      ...(formData.personType === "INFLUENCER" ? { mostUsedSocialMediaURL: formData.mostUsedSocialMediaURL } : {}),
    };
    const response = await fetch(`${process.env.BACKEND_URL}/v1/questions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    const responseData = await response.json(); 
    if (!response.ok) {
      throw new Error(`Something went wrong! Status: ${response.status}`);
    }
    return responseData;
  } catch (error) {
    throw error;
  }
};
