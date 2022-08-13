const selector = document.querySelector("input[type='tel']");
const validation = new JustValidate('.contacts__form', {
  errorFieldCssClass: 'is-invalid',
  focusInvalidField: true,
  lockForm: true
});
validation.addField('#name', [
  {
    rule: 'required',
    errorMessage: 'Введите имя'
  },
  {
    rule: 'minLength',
    value: 2,
    errorMessage: 'Введите минимум 2 символа'
  },
  {
    rule: 'maxLength',
    value: 20,
    errorMessage: 'Максимальная длина имени 20 символов'
  }
]);
validation.addField('#phone', [
  {
    rule: 'required',
    errorMessage: 'Введите телефон'
  },
  {
    rule: 'checkTelFormat',
    validator: () => {
      const phone = selector.textContent;
      return Number(phone);
    },
    errorMessage: 'Недопустимый формат'
  }
]);
