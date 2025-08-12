export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    save,
}

function query(entityType, delay = 500) {
    try {
        console.log(`AsyncStorage: Querying ${entityType}`)
        var entities = JSON.parse(localStorage.getItem(entityType)) || []
        console.log(`AsyncStorage: Found ${entities.length} entities for ${entityType}`)
        return new Promise(resolve => setTimeout(() => resolve(entities), delay))
    } catch (error) {
        console.error(`AsyncStorage: Error querying ${entityType}:`, error)
        return new Promise(resolve => setTimeout(() => resolve([]), delay))
    }
}

function get(entityType, entityId) {
    return query(entityType).then(entities => {
        const entity = entities.find(entity => entity._id === entityId)
        if (!entity) throw new Error(`Get failed, cannot find entity with id: ${entityId} in: ${entityType}`)
        return entity
    })
}

function post(entityType, newEntity) {
    newEntity = { ...newEntity }
    newEntity._id = _makeId()
    return query(entityType).then(entities => {
        entities.push(newEntity)
        _save(entityType, entities)
        return newEntity
    })
}

function put(entityType, updatedEntity) {
    return query(entityType).then(entities => {
        const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
        if (idx < 0) throw new Error(`Update failed, cannot find entity with id: ${updatedEntity._id} in: ${entityType}`)
        entities.splice(idx, 1, updatedEntity)
        _save(entityType, entities)
        return updatedEntity
    })
}

function remove(entityType, entityId) {
    return query(entityType).then(entities => {
        const idx = entities.findIndex(entity => entity._id === entityId)
        if (idx < 0) throw new Error(`Remove failed, cannot find entity with id: ${entityId} in: ${entityType}`)
        entities.splice(idx, 1)
        _save(entityType, entities)
    })
}

function save(entityType, entities) {
    try {
        console.log(`AsyncStorage: Saving ${entities.length} entities to ${entityType}`)
        return new Promise(resolve => {
            _save(entityType, entities)
            console.log(`AsyncStorage: Successfully saved to ${entityType}`)
            resolve(entities)
        })
    } catch (error) {
        console.error(`AsyncStorage: Error saving to ${entityType}:`, error)
        return Promise.reject(error)
    }
}

// Private functions

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}