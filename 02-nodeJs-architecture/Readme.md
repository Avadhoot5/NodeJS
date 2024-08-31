NodeJs Architecture

1.) Event Queue - incoming requests are added in queue
2.) Event Loop - processes the requests in FIFO format.
3.) If Req is non blocking (async) - it gets executed in some another thread (call stack)
4.) If Req is blocking (sync) - the req is sent to thread pool
5.) Thread pool - contains by default 4 workers. every blocking req is sent here and each worker 
    executes the req. Sends back the result.
6.) Since there are limited no of workers, async calls are preferred over sync calls.

