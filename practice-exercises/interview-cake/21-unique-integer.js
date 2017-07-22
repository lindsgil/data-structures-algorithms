// Given the array of IDs, which contains many duplicate integers and one unique integer, find the unique integer.

function findUniqueId(deliveryIds) {
  var idsToOccurrences = new Map();

  deliveryIds.forEach(function(deliveryId) {
    if (idsToOccurrences.has(deliveryId)) {
      var newCount = idsToOccurrences.get(deliveryId) + 1;
      idsToOccurrences.set(deliveryId, newCount);
    } else {
      idsToOccurrences.set(deliveryId, 1);
    }
  });

  for(var [id, count] in idsToOccurrences) {
    if (count === 1) {
      return id;
    }
  }
}
