rbTraits.onchange = function() {
  if (rbTraits.value == 0)
    lblMessage.value = (`I would agree that you are an Optimistic person too!`)
  else if (rbTraits.value == 1)
    lblMessage.value = (`I would agree that you are a Pessimistic person too!`)
  else if (rbTraits.value == 2)
    lblMessage.value = (`I would agree that you are a Trusting person too!`)
  else if (rbTraits.value == 3)
    lblMessage.value = (`I would agree that you are a Envious person too!`)

}


btNextPage.onclick = function() {
  ChangeForm(favExercises)
}