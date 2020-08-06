var app = new Vue({
    el: "#app",
    data: {
        getIdUrl: null,
        search: "",
        characters: [],
        planets: [],
        starShips: [],
    },
    //BUSCO Y ARMO JSON.
    methods: {
        getPeople: function () {
            $.get("https://swapi.dev/api/people/" + app.search)
                .done(function (character) {
                    var characterData = {
                        name: character.name
                    }
                    app.characters.push(characterData)

                })
            document.getElementById("").classList.add()
                .fail(function () {
                    if (app.characters.length >= 3) {
                        alert("only 3 characters at the time")
                    }
                    alert("Please Try Again");
                })

        },
    }
})
document.getElementById("search")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("ship").click();
        }
    })