export const validateInput = (inputArray) => {
    for (let i = 0; i < inputArray.length; i++) {
        const input = inputArray[i];
        const { type, name, data } = input;
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const phonePattern = /^[0-9]+$/;
    
        // Perform validation based on the input type
        switch (type) {
          case 'text':
            if (typeof data !== 'string' || data.trim() === '') {
              return { status: false, issue: name };
            }
            break;
          case 'number':
            if (typeof data !== 'number' || isNaN(data)) {
              return { status: false, issue: name };
            }
            break;
          
            case 'boolean':
            if (typeof data !== 'boolean' || !data) {
                return { status: false, issue: name };
            }
            break;
            case 'email':
                if (!emailPattern.test(data)) {
                  return { status: false, issue: name };
                }
                break;
            case 'phone':
                // Use a regular expression to validate phone numbers (adjust the pattern as needed)
                if (!phonePattern.test(data)) {
                    return { status: false, issue: name };
                }
                break;
          // Add more cases for other input types as needed
          default:
            break;
        }
      }
    
      // If all inputs are valid, return a status of true
      return { status: true };
}