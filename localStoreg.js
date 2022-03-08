const addlocalStorage = () => {
    const localStorageInput = document.getElementById('local-storeg')
    const id = localStorageInput.value
    const sessionStorageValue = document.getElementById('session-storeg')
    const sessionIdValue = sessionStorageValue.value

    // 
    localStorage.setItem(id, sessionIdValue)

    // Clear input & Value Flield
    localStorageInput.value = ''
    sessionStorageValue.value = ''

}