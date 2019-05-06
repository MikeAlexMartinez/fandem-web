function composedIsLoading(composedResponse) {
  return Object.keys(composedResponse).some(
    key => composedResponse[key].loading
  );
}

function composedHasError(composedResponse) {
  return Object.keys(composedResponse).some(key => composedResponse[key].error);
}

export { composedIsLoading, composedHasError };
