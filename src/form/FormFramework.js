export function createControl(config, validation) {
    return {
        ...config,
        validation,
        valid: !validation,
        touched: false,
        value: ''

    }
}
export function validate(value, validation) {
    if (!validation) {
        return true
    }
    let isValid = true

    isValid = value.trim() !== '' && isValid

    return isValid
}

export function validateForm(controls) {
    let isFormValid = true

    for (let control in controls) {
        if (controls.hasOwnProperty(control)) {
            isFormValid = controls[control].valid && isFormValid
        }
    }
    return isFormValid
}
