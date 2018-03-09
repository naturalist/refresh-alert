function run() {

    let bg = chrome.extension.getBackgroundPage()
    let $enable = document.getElementById('enable')
    let $pattern = document.getElementById('pattern')

    $enable.checked = bg.enabled
    $pattern.value = bg.pattern

    $enable.addEventListener("change", () => {
        bg.enabled = $enable.checked
    })

    $pattern.addEventListener("change", () => {
        bg.pattern = $pattern.value
    })
}

window.onload = run
