function addListeners(elt) {
    function capturing(e) {
      eventLog('capturing ', this, e.target)
    }
    function bubbling(e) {
      eventLog('bubbling  ', this, e.target)
    }
      elt.addEventListener('click', capturing, true)
      elt.addEventListener('click', bubbling, false)
      elt.addEventListener('keyup', capturing, true)
      elt.addEventListener('keyup', bubbling, false)
      if (elt === window) return
      for (let n of elt.children) addListeners(n)
  }
  function formatNode(node) {
      if (node == window) return 'window'
      let s = node.id? '#'+node.id : ''
      return node.nodeName+s
  }
  function eventLog(type, node, target) {
    function eligible(node) {
      if (!bdy.checked || node===target) return true
      return node!=window && node!=document 
          && node!=document.firstElementChild //html
    }
    if (eligible(node))
      out.innerText += type + formatNode(node) +'\n'
  }
