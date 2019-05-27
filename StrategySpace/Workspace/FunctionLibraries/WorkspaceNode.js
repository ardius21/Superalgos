function newProtocolNode () {
  thisObject = {
    getWorkspaceNode: getWorkspaceNode
  }
  return thisObject

  function getWorkspaceNode (node) {
    switch (node.type) {
      case 'Condition':
        {
          let condition = {
            id: node.id,
            type: node.type,
            subType: node.subType,
            name: node.name,
            code: node.code,
            savedPayload: getSavedPayload(node)
          }
          return condition
        }
      case 'Situation': {
        let situation = {
          id: node.id,
          type: node.type,
          subType: node.subType,
          name: node.name,
          conditions: [],
          savedPayload: getSavedPayload(node)
        }

        for (let m = 0; m < node.conditions.length; m++) {
          let condition = getWorkspaceNode(node.conditions[m])
          situation.conditions.push(condition)
        }
        return situation
      }
      case 'Phase': {
        let phase = {
          id: node.id,
          type: node.type,
          subType: node.subType,
          name: node.name,
          code: node.code,
          situations: [],
          savedPayload: getSavedPayload(node)
        }

        for (let m = 0; m < node.situations.length; m++) {
          let situation = getWorkspaceNode(node.situations[m])
          phase.situations.push(situation)
        }
        return phase
      }
      case 'Stop': {
        if (node === undefined) { return }
        let stop = {
          id: node.id,
          type: node.type,
          subType: node.subType,
          name: node.name,
          phases: [],
          savedPayload: getSavedPayload(node)
        }

        for (let m = 0; m < node.phases.length; m++) {
          let phase = getWorkspaceNode(node.phases[m])
          stop.phases.push(phase)
        }
        return stop
      }
      case 'Take Profit': {
        if (node === undefined) { return }
        let takeProfit = {
          id: node.id,
          type: node.type,
          subType: node.subType,
          name: node.name,
          phases: [],
          savedPayload: getSavedPayload(node)
        }

        for (let m = 0; m < node.phases.length; m++) {
          let phase = getWorkspaceNode(node.phases[m])
          takeProfit.phases.push(phase)
        }
        return takeProfit
      }
      case 'Take Position Event': {
        if (node === undefined) { return }
        let event = {
          id: node.id,
          type: node.type,
          subType: node.subType,
          name: node.name,
          situations: [],
          savedPayload: getSavedPayload(node)
        }

        for (let m = 0; m < node.situations.length; m++) {
          let situation = getWorkspaceNode(node.situations[m])
          event.situations.push(situation)
        }
        return event
      }
      case 'Trigger On Event': {
        if (node === undefined) { return }
        let event = {
          id: node.id,
          type: node.type,
          subType: node.subType,
          name: node.name,
          situations: [],
          savedPayload: getSavedPayload(node)
        }

        for (let m = 0; m < node.situations.length; m++) {
          let situation = getWorkspaceNode(node.situations[m])
          event.situations.push(situation)
        }
        return event
      }
      case 'Trigger Off Event': {
        if (node === undefined) { return }
        let event = {
          id: node.id,
          type: node.type,
          subType: node.subType,
          name: node.name,
          situations: [],
          savedPayload: getSavedPayload(node)
        }

        for (let m = 0; m < node.situations.length; m++) {
          let situation = getWorkspaceNode(node.situations[m])
          event.situations.push(situation)
        }
        return event
      }
      case 'Initial Definition': {
        if (node === undefined) { return }
        let object = {
          id: node.id,
          type: node.type,
          subType: node.subType,
          name: node.name,
          savedPayload: getSavedPayload(node)
        }
        return object
      }
      case 'Trigger Stage': {
        if (node === undefined) { return }
        let stage = {
          id: node.id,
          type: node.type,
          subType: node.subType,
          name: node.name,
          entryPoint: getWorkspaceNode(node.entryPoint),
          exitPoint: getWorkspaceNode(node.exitPoint),
          sellPoint: getWorkspaceNode(node.sellPoint),
          savedPayload: getSavedPayload(node)
        }
        return stage
      }
      case 'Open Stage': {
        if (node === undefined) { return }
        let stage = {
          id: node.id,
          type: node.type,
          subType: node.subType,
          name: node.name,
          initialDefinition: getWorkspaceNode(node.initialDefinition),
          savedPayload: getSavedPayload(node)
        }
        return stage
      }
      case 'Manage Stage': {
        if (node === undefined) { return }
        let stage = {
          id: node.id,
          type: node.type,
          subType: node.subType,
          name: node.name,
          stopLoss: getWorkspaceNode(node.stopLoss),
          buyOrder: getWorkspaceNode(node.buyOrder),
          savedPayload: getSavedPayload(node)
        }
        return stage
      }
      case 'Close Stage': {
        if (node === undefined) { return }
        let stage = {
          id: node.id,
          type: node.type,
          subType: node.subType,
          name: node.name,
          savedPayload: getSavedPayload(node)
        }
        return stage
      }
      case 'Strategy': {
        let strategy = {
          id: node.id,
          type: node.type,
          subType: node.subType,
          name: node.name,
          entryPoint: getWorkspaceNode(node.entryPoint),
          exitPoint: getWorkspaceNode(node.exitPoint),
          sellPoint: getWorkspaceNode(node.sellPoint),
          stopLoss: getWorkspaceNode(node.stopLoss),
          buyOrder: getWorkspaceNode(node.buyOrder),
          savedPayload: getSavedPayload(node)
        }
        return strategy
      }
      case 'Trading System': {
        let tradingSystem = {
          id: node.id,
          type: node.type,
          subType: node.subType,
          name: node.name,
          strategies: [],
          savedPayload: getSavedPayload(node)
        }

        for (let m = 0; m < node.strategies.length; m++) {
          let strategy = getWorkspaceNode(node.strategies[m])
          tradingSystem.strategies.push(strategy)
        }
        return tradingSystem
      }
    }
  }

  function getSavedPayload (node) {
    let savedPayload = {
      position: {
        x: node.payload.position.x,
        y: node.payload.position.y
      },
      targetPosition: {
        x: node.payload.targetPosition.x,
        y: node.payload.targetPosition.y
      },
      floatingObject: {
        isPinned: node.payload.floatingObject.isPinned
      },
      uiObject: {
        isRunning: node.payload.uiObject.isRunning
      }
    }
    return savedPayload
  }
}
