/* eslint-disable @typescript-eslint/no-explicit-any */
//TODO: Add stronger typing to the functions
export const onMouseMoveHandler = (e: any) => {
  const target = e.target;

  // Get the next and previous siblings of the current target
  const nextSibling = target.nextSibling;
  const previousSibling = target.previousSibling;
  console.log(nextSibling);
  console.log(previousSibling);

  if (target instanceof HTMLSpanElement) {
    target.classList.add('activeSpan');
  }
  if (nextSibling instanceof HTMLSpanElement) {
    nextSibling.classList.add('activeSpanNeighbourNext');
  }
  if (previousSibling instanceof HTMLSpanElement) {
    previousSibling.classList.add('activeSpanNeighbourPrev');
  }
};

export const onMouseLeaveHandler = (e: any) => {
  const target = e.target;
  // Remove classes from the element
  if (target) {
    setTimeout(() => {
      target.classList.remove('activeSpan');
      const nextSibling = target.nextSibling;
      const previousSibling = target.previousSibling;
      if (nextSibling instanceof HTMLSpanElement) {
        nextSibling.classList.remove('activeSpanNeighbourNext');
      }
      if (previousSibling instanceof HTMLSpanElement) {
        previousSibling.classList.remove('activeSpanNeighbourPrev');
      }
    }, 300);
  }
};
