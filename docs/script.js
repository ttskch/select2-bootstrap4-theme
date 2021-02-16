$(function () {
  $('select:not(.custom-select)').each(function () {
    $(this).select2({
      theme: 'bootstrap4',
      width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
      placeholder: $(this).data('placeholder'),
      allowClear: Boolean($(this).data('allow-clear')),
      closeOnSelect: !$(this).attr('multiple')
    })
  })
})

$(document).on('click', '.toggle-validation-js', function (e) {
  e.preventDefault()
  $this = $(this)

  $this.closest('.form-group').toggleClass('was-validated')

  $selectElement = $this.closest('.form-group').find('select')
  $selectElement
    .toggleClass($this.data('validationClass'))
})
