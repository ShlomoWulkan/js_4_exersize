const filterAndSortEvenNumbers = (arr) => {
    const sortedArr = arr.filter(n => n % 2 === 0).sort((a, b) => a - b) 
    return sortedArr
}

console.log(filterAndSortEvenNumbers([10, 2, 3, 3, 5, 6, 7, 8, 1, 10]));


const removeDuplicates = (arr) => {
    const uniqueArr = [...new Set(arr)]
    return uniqueArr
}

console.log(removeDuplicates([10, 2, 3, 3, 5, 6, 7, 8, 1, 10]));


const capitalizeFirstLetter = (str) => {
    const arr = str.split(' ')
    const capitalizeFirstLetterStr = arr.map(word => word[word.length -1] === '.' ? word : word.charAt(0).toUpperCase() + word.slice(1))
    return capitalizeFirstLetterStr.join(' ')
}

console.log(capitalizeFirstLetter('hello world. this is a test.'));


const saveTasks = (arr) => {
    localStorage.setItem('tasks', JSON.stringify(arr))    
}

const loadTasks = () => {
    return JSON.parse(localStorage.getItem('tasks'))
}

const addTask = (task) => {
    const tasks = loadTasks() || []
    if (!tasks.some(t => t.id === task.id)) {
        tasks.push(task)
        saveTasks(tasks)
    }
}


const removeTask = (task) => {
    const tasks = loadTasks()
    const newTasks = tasks.filter(t => t !== task)
    saveTasks(newTasks)
}

newTask = {
    id: 1,
    task: 'Buy groceries',
}

addTask(newTask)

const cleerTasks = () => {
    saveTasks([])
}
