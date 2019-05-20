export default function debounceFunction(functionToLimit, delay = 200) {
  let debounceThrottleTimer;
  return () => {
    // Reset the throttle timer when we call the debounce function
    clearTimeout(debounceThrottleTimer);
    // If the debounceFunction is called again before the delay time, it will be ignored
    debounceThrottleTimer = setTimeout(functionToLimit.bind(this), delay);
  };
}
