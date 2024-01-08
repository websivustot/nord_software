export const validateEmail = (email:string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
  
export const validateName = (name: string) => {
    const textRegex = /^[A-Za-z -]+$/;
    return textRegex.test(name);
};

export const validatePhone = (phone: string) => {
    const textRegex = /^\+(\d{3})(\d+)$/;
    return textRegex.test(phone);
};