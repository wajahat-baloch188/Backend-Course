// const asyncHandler = () => (fn) => {
//     async (req, res, next) => {
//         try {
//             await fn(req, res, next);
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ success: false, message: error.message});
//         }
//     }
// }

const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err)); // we can write reject on the place of catch
  };
};

export { asyncHandler };
