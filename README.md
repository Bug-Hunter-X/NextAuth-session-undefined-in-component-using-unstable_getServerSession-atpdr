# NextAuth Session Undefined in Component

This repository demonstrates a bug where the NextAuth session is undefined when using `unstable_getServerSession` within a component.  The issue arises from attempting to use server-side functions (like `unstable_getServerSession`) directly within a client-side component.  This leads to the `req` and `res` objects being undefined, resulting in a failed session retrieval.

## Solution
The solution involves using the `getServerSideProps` function, which provides the necessary server-side context to utilize `unstable_getServerSession` correctly.  The session data is then passed to the component's props, ensuring its availability.