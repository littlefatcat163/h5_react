//动画辅助
/**
  @param el (dom对象)
  @return eventName (string)
*/
export function getTransitionEndevName(el) {
  if(!el) throw new Error("el is null");
  else if(!el instanceof HTMLElement) throw new Error("el must be a HTMLElement");
  let transitions = {
   'transition':'transitionend',
   'OTransition':'oTransitionEnd',
   'MozTransition':'transitionend',
   'WebkitTransition':'webkitTransitionEnd'
 };
 for(let k in transitions) {
   if(el.style[k] !== undefined) return transitions[k];
 }
}
