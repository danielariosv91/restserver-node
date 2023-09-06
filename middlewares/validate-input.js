import { validationResult } from 'express-validator';

const validateInput = (request, response, next) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
        return response.status(400).json(errors)
    }

    next();
}

export {
    validateInput
}