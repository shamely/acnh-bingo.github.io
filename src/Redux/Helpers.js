export const NUMBER_OF_VILLAGERS = 24;

export const getFilteredDreamies = (villagers) => {
    return villagers.filter(vil => vil.isDreamie === true)
}

export const getFilteredOnIsland = (villagers) => {
    return villagers.filter(vil => vil.isOnIsland === true)
}

export const getFilteredNotDreamie = (villagers) => {
    return villagers.filter(vil => vil.isDreamie === false)
}

export const getFilteredNotOnIsland = (villagers) => {
    return villagers.filter(vil => vil.isOnIsland === false)
}

export const getFilteredNotOnIslandAndNotDreamie = (villagers) => {
    return villagers.filter(vil => vil.isDreamie === false && vil.isOnIsland === false)
}

const _getRandomFromList = (list) =>{
    return list[Math.floor(Math.random() * list.length)]
}

const _isInList = (list, element) => {
    return list.find(el => el.id === element.id) !== undefined
}

// Placing the dreamie randomly in the list as it's picked last
const _shuffleDreamie = (list) => {
    let randomIndex = Math.floor(Math.random() * list.length)
    let temp = list[randomIndex]

    list[randomIndex] = list[list.length - 1]
    list[list.length - 1] = temp

    return list
}

export const getRandomVillagers = (unfilteredVillagers) => {
    let randomTemp = [];
    let villagers = getFilteredNotOnIsland(unfilteredVillagers)
    let dreamies = getFilteredDreamies(unfilteredVillagers)

    const numberOfVillager = dreamies.length === 0 ? NUMBER_OF_VILLAGERS : NUMBER_OF_VILLAGERS - 1

    for(let i = 0; i < numberOfVillager; i++){
        let randomVillager = null
        
        do {
            randomVillager = _getRandomFromList(villagers)
        } while(_isInList(randomTemp, randomVillager))

        randomTemp.push(randomVillager)
    }

    if(dreamies.length > 0){
        let randomDreamie = null

        do{
            randomDreamie = _getRandomFromList(dreamies)
        } while(_isInList(randomTemp, randomDreamie))

        randomTemp.push(randomDreamie)
        randomTemp = _shuffleDreamie(randomTemp)
    }

    return randomTemp
}

export const getSuggestionFormat = (villagers) => {
    var suggestions = []
    villagers.forEach(vil => suggestions.push({id: vil.id, name: vil.name["name-USen"]}))

    return suggestions
}

export const addElementToString = (element, stringList) => {
    if(stringList.length > 0) stringList += ','
    return stringList += element.toString()
}

export const removeElementFromString = (element, stringList) => {
    if(stringList.length <= 0) return ''

    let list = stringList.split(',')
    const index = list.findIndex(e => e === element.toString())

    if(index === -1) return stringList

    list.splice(index, 1)
    return list.join(',')
}