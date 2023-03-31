let questions = [{
    numb: 1,
    question: "Anh Duc la ai?",
    answer: "ca 3 y tren",
    options: [
        "La nguoi dep trai", "hoc gioi", "choi game hay", "ca 3 y tren"]
}, {
    numb: 2,
    question: "What is the characteristic of the first generation of operating system?",
    answer: "Vacuum tubes, plug boards",
    options: [
        "Personal computers, single user, multitasking", "Transistors, batch systems", "Vacuum tubes, plug boards", "ICs and multiprogramming"]
}, {
    numb: 3,
    question: "Which is not an example of a resource that is commonly time-multiplexed?",
    answer: "Network interface",
    options: [
        "Graphics accelerator", "Network interface", "Main memory", "CPU"]
}, {
    numb: 4,
    question: "Which of the following is an Operating System component?",
    answer: "Process Management",
    options: [
        "Process Management", "Speed Management", "Space Management", "Time Management"]
}, {
    numb: 5,
    question: "Which of the following conditions that causes the processes to be terminated, when processes have",
    answer: "Normal exit (voluntary)",
    options: [
        "Fatal error (involuntary)", "Normal exit (voluntary)", "Killed by another process (involuntary)", "Error exit (voluntary)"]
}, {
    numb: 6,
    question: "Which of the following statements is a hardware solution to the critical region problem?",
    answer: "TSL|",
    options: [
        "Semaphore", "TSL|", "None of the other choices", "Shared memory"]
}, {
    numb: 7,
    question: "Which of the following process state transitions is correct, when the scheduler picks a process from",
    answer: "Ready -> running",
    options: [
        "Ready -> running", "Running -> Blocked (waiting)", "Blocked (waiting) -> ready", "Running -> ready"]
}, {
    numb: 8,
    question: "Which cannot be able to solve the race condition?",
    answer: "TSL",
    options: [
        "TSL", "Shared memory", "Semaphore", "Monitor"]
}, {
    numb: 9,
    question: "Which of the following statements about semaphores is true?",
    answer: "All of the other choices",
    options: [
        "A semaphore implementation should guarantee that processes do not suffer indefinite postponement,", "P and V (Down and Up) operations should be indivisible operations", "All of the other choices", "If several processes attempt a P(S) operation simultaneously, only one process should be allowed to"]
}, {
    numb: 10,
    question: "Which of the following process state transitions is illegal?",
    answer: "Ready -> Blocked (waiting)",
    options: [
        "Ready -> Blocked (waiting)", "Running -> Blocked (waiting)", "Blocked (waiting) -> ready", "Running -> ready"]
}, {
    numb: 11,
    question: "In order to implement mutual exclusion on a critical resource for competing processes, only one",
    answer: "In the critical region of the program",
    options: [
        "None of the other choices", "In the critical region of the program", "To exhibit cooperation", "To perform message passing"]
}, {
    numb: 12,
    question: "Critical Region (Section) concept used in interprocess communication is:",
    answer: "A part of shared memory",
    options: [
        "A part of shared memory", "A part of the program where the shared memory is accessed", "None of the other choices", "A part of shared data"]
}, {
    numb: 13,
    question: "Which of the following statements is incorrect about timesharing and multiprogramming systems?",
    answer: "All multiprogramming systems are timesharing systems",
    options: [
        "Al l timesharing systems are multiprogramming systems", "In a timesharing system, multiple users can access the system simultaneously", "All multiprogramming systems are timesharing systems", "In a multiprogramming system, one user can run several processes simultaneously"]
}, {
    numb: 14,
    question: "Which of the following instructions should be allowed only in kernel mode?",
    answer: "Disable all interrupts",
    options: [
        "AND of two numbers", "ADD of two numbers", "Read the time-of-day clock", "Disable all interrupts"]
}, {
    numb: 15,
    question: "What is an operating system structure in which the communication between requesting process and responding process is message passing?",
    answer: "MS-DOS",
    options: [
        "Monolithic Systems", "All of the other choices", "MS-DOS", "Client-Server Model"]
}, {
    numb: 16,
    question: "The language ofthe CPU is known as its",
    answer: "C",
    options: [
        "Register set", "Control unit set", "Instruction set |", "None ofthe other choices"]
}, {
    numb: 17,
    question: "Linux and are often used as operating systems on supercomputers, mainframes, and servers.",
    answer: "UNIX",
    options: [
        "UNIX", "Windows", "None ofthe other choices", "Mac OS"]
}, {
    numb: 18,
    question: "A well-known Real-Time operating system is:",
    answer: "e-COS",
    options: [
        "MS-DOS", "e-COS", "TinyOS", "Personal Operating System"]
}, {
    numb: 19,
    question: "Which ofthe following operating systems is an example of monolithic system?",
    answer: "MS-DOS",
    options: [
        "Windows XP", "Mac OS", "UNIX", "MS-DOS"]
}, {
    numb: 20,
    question: "Where is the position of the operating system in computer system:",
    answer: "Above the hardware and under the user interface program",
    options: [
        "Between the user interface program and the application Program", "None of the other choices", "In user space", "Above the hardware and under the user interface program"]
}, {
    numb: 21,
    question: "The is the essential component ofther operating system that remains in RAM when your computer is powered on.",
    answer: "kernel",
    options: [
        "registry", "Source khong ghi", "kernel", "system file"]
}, {
    numb: 22,
    question: "What is correct about trap instructions and interrupts?",
    answer: "All ofthe other choices",
    options: [
        "Trap instruction switches the execution mode of a CPU from the user mode to the kernel mode.", "A trap instruction is caused by a user program to invoke functions in the OS kernel", "An interrupt is caused by an external event", "All ofthe other choices"]
}, {
    numb: 23,
    question: "The _________is the essential component ofthe operating system that remains in RAM when your computer is powered on.",
    answer: "kernel",
    options: [
        "system file", "None", "kernel", "registry"]
}, {
    numb: 24,
    question: "Which of the following instructions should be allowed only in kernel mode?",
    answer: "C",
    options: [
        "ADD of two numbers", "Read the time-of-day clock", "Disable all interrupts 1", "AND of two numbers"]
}, {
    numb: 25,
    question: "Consider a computer system that has cache memory, main memory (RAM) and disk, and OS uses virtual memory. It takes 2 nsec to access a byte from the cache. 20 nsec to access a byte from RAM. and 10 msec to",
    answer: "4 msec. 40 msec. 20 sec",
    options: [
        "1 msec. 10 msec. 10 sec", "4 msec. 40 msec. 20 sec", "2 msec. 20 msec. 10 sec", "1 msec. 10 msec. 5 sec"]
}, {
    numb: 26,
    question: "The basic idea behind the microkernel design is:",
    answer: "To archive high reliability by splitting operating system up into small, well-defined modules",
    options: [
        "All ofthe other choices", "All other modules run as relatively powerless ordinary user processes", "Only one module runs in kernel mode", "To archive high reliability by splitting operating system up into small, well-defined modules"]
}, {
    numb: 27,
    question: "Which of the following statements is incorrect about timesharing and multiprogramming systems?",
    answer: "Al l multiprogramming systems are timesharing systems",
    options: [
        "In a timesharing system, multiple users can access the system simultaneously", "Al l timesharing systems are multiprogramming systems", "Al l multiprogramming systems are timesharing systems", "In a multiprogramming system, one user can run several processes simultaneously"]
}, {
    numb: 28,
    question: "Which of the following conditions that causes the processes to be terminated, when processes have",
    answer: "Normal exit (voluntary)",
    options: [
        "Fatal error (involuntary)", "Normal exit (voluntary)", "Killed by another process (involuntary)", "Error exit (voluntary)"]
}, {
    numb: 29,
    question: "Which of the following statements is a hardware solution to the critical region problem?",
    answer: "TSL|",
    options: [
        "Semaphore", "TSL|", "None of the other choices", "Shared memory"]
}, {
    numb: 30,
    question: "Which of the following process state transitions is correct, when the scheduler picks a process from",
    answer: "Ready -> running",
    options: [
        "Ready -> running", "Running -> Blocked (waiting)", "Blocked (waiting) -> ready", "Running -> ready"]
}, {
    numb: 31,
    question: "Which is not a goal of a sheduling algorithm for all systems?",
    answer: "Balance",
    options: [
        "Balance", "Response time", "Policy enforcement", "Fairness"]
}, {
    numb: 32,
    question: "Which cannot be able to solve the race condition?",
    answer: "TSL",
    options: [
        "TSL", "Shared memory", "Semaphore", "Monitor"]
}, {
    numb: 33,
    question: "Which of the following statements about semaphores is true?",
    answer: "All of the other choices",
    options: [
        "A semaphore implementation should guarantee that processes do not suffer indefinite postponement,", "P and V (Down and Up) operations should be indivisible operations", "All of the other choices", "If several processes attempt a P(S) operation simultaneously, only one process should be allowed to"]
}, {
    numb: 34,
    question: "Which of the following process state transitions is illegal?",
    answer: "Ready -> Blocked (waiting)",
    options: [
        "Ready -> Blocked (waiting)", "Running -> Blocked (waiting)", "Blocked (waiting) -> ready", "Running -> ready"]
}, {
    numb: 35,
    question: "In order to implement mutual exclusion on a critical resource for competing processes, only one",
    answer: "In the critical region of the program",
    options: [
        "None of the other choices", "In the critical region of the program", "To exhibit cooperation", "To perform message passing"]
}, {
    numb: 36,
    question: "Critical Region (Section) concept used in interprocess communication is:",
    answer: "A part of the program where the shared memory is accessed",
    options: [
        "A part of shared memory", "A part of the program where the shared memory is accessed", "None of the other choices", "A part of shared data"]
}, {
    numb: 37,
    question: "Which conditions of mutual exclusion does the Lock Variables (Software proposal) violate?",
    answer: "No two processes simultaneously in critical region",
    options: [
        "No process must wait forever to enter its critical region", "No two processes simultaneously in critical region", "No process running outside its critical region may block another process", "No assumptions made about speeds or numbers of CPUs"]
}, {
    numb: 38,
    question: "A entry of the Process table is called:",
    answer: "D",
    options: [
        "All of the other choices", "Process check block", "Process management block", "process control block."]
}, {
    numb: 39,
    question: "Semaphores that are initialized to 1 and used for two or more processes to ensure only one can enter",
    answer: "Binary semaphores",
    options: [
        "None of the other choices", "Binary semaphores", "Integer semaphores", "Counter semaphores"]
}, {
    numb: 40,
    question: "An arrival message causes the system to create a new thread to handle this message. This new thread is call",
    answer: "Pop-up",
    options: [
        "Upcall", "Distributed", "Activator", "Pop-up"]
}, {
    numb: 41,
    question: "How many ways is Thread implemented?",
    answer: "2",
    options: [
        "1", "3", "2", "None of the other choices"]
}, {
    numb: 42,
    question: "what is Sofware proposal in the solution of Mutual exclusion with Busy waiting?",
    answer: "Peterson's Solution",
    options: [
        "Message passing", "Monitors", "Peterson's Solution", "All of the other choices"]
}, {
    numb: 43,
    question: "Which of the following is not a CPU scheduling criterion?",
    answer: "Burst time",
    options: [
        "Burst time", "CPU utilization", "Throughput", "Response time"]
}, {
    numb: 44,
    question: "How many percent of the CPU time is wasted, when a computer system has enough room to hold two program and these programs are idle waiting for I/O 10% of the time?",
    answer: "1 %",
    options: [
        "90%", "99%", "None of the other choices", "1 %"]
}, {
    numb: 45,
    question: "A computer has 2GB RAM of which the operating system occupies 1GB. The processes are all 450 MB and have the same characteristics. How many percent is CPU utilization when these programs are idle waiting for I/O 20% of the time?",
    answer: "None of the other choices",
    options: [
        "4%", "90%", "None of the other choices", "96%"]
}, {
    numb: 46,
    question: "To specify an address in this segmented memory, the form is used",
    answer: "<segment-number, offset>",
    options: [
        "<physical address, offset>", "<process, offset>", "<segment-number, offset>", "<virtual address, offset>"]
}, {
    numb: 47,
    question: "Where should be put the page replacement algorithm In Mach model of Page fault handling with an",
    answer: "All of the other choices",
    options: [
        "All of the other choices", "In the low-level MMU handler", "In the external pager running in user space", "In the page fault handler that is part of the kernel"]
}, {
    numb: 48,
    question: "One of the most important innovations of demand paging was that it made feasible",
    answer: "Virtual memory.",
    options: [
        "Virtual paging", "Virtual memory.", "Memory demand", "Virtual demand"]
}, {
    numb: 49,
    question: "Which of these statements about the algorithm 'Next fit' is true?",
    answer: "Memory Manager starting searching the list of segments from the place where it left off last time",
    options: [
        "Memory Manager searches the entire list of segments from beginning to end and take smallest hole", "Memory Manager scans along the list of segments until it finds a hole that is big enough.", "Memory Manager starting searching the list of segments from the place where it left off last time", "None of the other choices"]
}, {
    numb: 50,
    question: "If there are 64 pages and the page size is 2048 words, what is the length of logical address?",
    answer: "17 bits",
    options: [
        "17 bits", "15 bits", "16 bits", "14 bits"]
}, {
    numb: 51,
    question: "The __________ policy is based on the theory that the best page to remove is the one that has been in The memory the longest",
    answer: "LRU",
    options: [
        "FIFO", "LIFO", "LRU", "NRU"]
}, {
    numb: 52,
    question: "Which of the following information bits in the entry of page table is used to indicate Page Fault?",
    answer: "Present/absent bit",
    options: [
        "Status bit", "Present/absent bit", "Referenced bit", "Modified bit"]
}, {
    numb: 53,
    question: "In a system employing a paging scheme for memory management , wasted space is due to:",
    answer: "Internal fragmentation",
    options: [
        "None of the other choices", "Internal fragmentation", "Pages and frames of different specified sizes", "External fragmentation"]
}, {
    numb: 54,
    question: "Which of these statements about the algorithm 'Next fit' is true?",
    answer: "Memory Manager starting searching the list of segments from the place where it left off last time.",
    options: [
        "Memory Manager starting searching the list of segments from the place where it left off last time.", "Memory Manager scans along the list of segments until it finds a hole that is big enough.", "Memory Manager searches the entire list of segments from beginning to end and take smallest hole that is adequate.", "None of the other choices"]
}, {
    numb: 55,
    question: "Which of the following is appropriate to determine program size and create page table?",
    answer: "Process creation",
    options: [
        "Process termination time", "Page fault time", "Process creation", "Process execution"]
}, {
    numb: 56,
    question: "Which of the following information bits in the entry of page table is false?",
    answer: "Present/absent bit",
    options: [
        "Present/absent bit", "Modified bit", "Protection bit", "Mode bit"]
}, {
    numb: 57,
    question: "Consider a swapping system in which the memory consists of the following hole sizes: 10 K, 4 K, 20 K, 15",
    answer: "10 K, 20 K, 15 K",
    options: [
        "9 K, 15 K, 10 K", "10 K, 20 K, 15 K", "20 K, 15 K, 4 K", "None of the other choices"]
}, {
    numb: 58,
    question: "When a virtual memory system manages memory in fixed length units, which of the following terms",
    answer: "Page",
    options: [
        "Page", "Frame", "Block", "Segment"]
}, {
    numb: 59,
    question: "Which of the following statements is incorrect about Translation Look-aside Buffer (TLB)?",
    answer: "A TLB miss implies a disk operation will follow",
    options: [
        "None of the other choices", "A TLB is sometimes known as an associative memory", "A TLB miss implies a disk operation will follow", "Each entry of a TLB contains the information about one page, including the virtual page number and"]
}, {
    numb: 60,
    question: "When there is an excessive amount of page swapping between main memory and secondary",
    answer: "thrashing",
    options: [
        "thrashing", "Over swapping", "hot swapping", "excessive demand paging"]
}, {
    numb: 61,
    question: "In terms of disk storage efficiency, the method of 'Backing up pages dynamically' in comparison with",
    answer: "Better",
    options: [
        "Worse", "Better", "Nearly equal", "Equal"]
}, {
    numb: 62,
    question: "When a virtual memory system manages memory in fixed length units, which of the following terms",
    answer: "Page",
    options: [
        "Block", "Page", "Frame", "Segment"]
}, {
    numb: 63,
    question: "File Structure can be:",
    answer: "All of the other choices",
    options: [
        "Byte sequence", "All of the other choices", "Tree", "Record sequence"]
}, {
    numb: 64,
    question: "Which of the following is correct about symbolic links?",
    answer: "Symbolic links can point to files in the network",
    options: [
        "Symbolic links can only point to files on the same machines", "None of the other choices", "Symbolic links need not space to store the path name", "Symbolic links can point to files in the network"]
}, {
    numb: 65,
    question: "File is generally defined to be:",
    answer: "A collection of similar records",
    options: [
        "A collection of related fields", "A basic element of data", "None of the other choices", "A collection of similar records"]
}, {
    numb: 66,
    question: "is a specialized WRITE command for existing data files that allows for appending records or for",
    answer: "REWRITE",
    options: [
        "UPDATE", "REWRITE", "MODIFY", "APPEND"]
}, {
    numb: 67,
    question: "Many computer users and some operating systems call subdirectories",
    answer: "Files",
    options: [
        "Volumes", "Databases", "Folders", "Files"]
}, {
    numb: 68,
    question: "Which method is used to implement files to keep each file as a linked list of disk blocks?",
    answer: "Linked List Allocation",
    options: [
        "Contiguous Allocation", "i-node", "File Allocation Table", "Linked List Allocation"]
}, {
    numb: 69,
    question: "Which of the following allocation methods, Operating system MS-DOS is implemented?",
    answer: "Linked allocation using FAT",
    options: [
        "Linked allocation using FAT", "Indexed allocation", "Contiguous allocation", "Linked allocation"]
}, {
    numb: 70,
    question: "Which of a system call is to allow the system announce that the file is coming and set some of the",
    answer: "CREATE",
    options: [
        "CREATE", "RENAME", "OPEN", "CLOSE"]
}, {
    numb: 71,
    question: "Which of the following is not correct about hard links and symbolic links? d",
    answer: "Hard links can point to files on other machines",
    options: [
        "Symbolic links need space to store the path name and considerable number of extra disk accesses", "Hard links can point to files on other machines", "Hard links do not require extra disk space", "Symbolic links can point to files in the network"]
}, {
    numb: 72,
    question: "Which of a system call is to allow the file to appear in more than one directory?",
    answer: "LINK",
    options: [
        "CREATE", "LINK", "OPEN", "SEEK"]
}, {
    numb: 73,
    question: "Which of a system call is to allow the system free up internal table space?",
    answer: "Close",
    options: [
        "SEEK", "OPEN", "Close", "DELETE"]
}, {
    numb: 74,
    question: "What is incorrect about contiguous allocation of files?",
    answer: "It does not cause disk fragmentation",
    options: [
        "It leads to excellent read performance", "It does not cause disk fragmentation", "It is widely used on CD-ROMs", "It is simple to implement"]
}, {
    numb: 75,
    question: "Which of the following is not special file?",
    answer: "Stream special file",
    options: [
        "None of the other choices", "Block special file", "Character special file", "Stream special file"]
}, {
    numb: 76,
    question: "Disk can be divided up into one or more partitions. The first block of every partition is called:",
    answer: "Boot block",
    options: [
        "Super block", "Free block", "MBR", "Boot block"]
}, {
    numb: 77,
    question: "Which of the following statements about interrupts and trap instructions is incorrect?",
    answer: "None of the other choices",
    options: [
        "An interrupt is a hardware-generated change of control flow within the system", "None of the other choices", "A trap instruction is a software-generated interrupt", "An interrupt handler deals with the cause of the interrupt"]
}, {
    numb: 78,
    question: "What is a 'stripping' in RAID?",
    answer: "Distributing data over multiple drives",
    options: [
        "Take away possessions from someone", "Get undressed", "All of the other choices", "Distributing data over multiple drives"]
}, {
    numb: 79,
    question: "How much cylinder skew is needed for a 5400- RPM (rotate per minute) disk with the track-to-track",
    answer: "18 sectors",
    options: [
        "18 sectors", "12 sectors", "24 sectors", "36 sectors"]
}, {
    numb: 80,
    question: "In a fixed magnetic disk, each circle is called a",
    answer: "track",
    options: [
        "platter", "sector", "block", "track"]
}, {
    numb: 81,
    question: "Which of the following I/O software do Device drivers do?",
    answer: "Converting binary integers to ASCII for printing",
    options: [
        "None of the other choices", "Checking to see if the user is permitted to use the device", "Converting binary integers to ASCII for printing", "Writing commands to the device registers!"]
}, {
    numb: 82,
    question: "Device Driver is usually written by:",
    answer: "Device's Manufacturer",
    options: [
        "Device's Manufacturer", "OS's Manufacturer", "Computer's Manufacturer", "All of the other choices"]
}, {
    numb: 83,
    question: "The aspect of disk performance that represents the time it takes to position the head a the desired",
    answer: "Rotational delay",
    options: [
        "Rotational delay", "Access time", "Seek time", "None of the other choices"]
}, {
    numb: 84,
    question: "A operation concerning Stable Storage is:",
    answer: "All of the other choices",
    options: [
        "Stable Reads", "All of the other choices", "Crash recovery", "Stable writes"]
}, {
    numb: 85,
    question: "When making CDs for sale, such as music or software CDs, data is recorded on a master disc by",
    answer: "Lands",
    options: [
        "Lakes", "Lands", "Valleys", "Hills"]
}, {
    numb: 86,
    question: "Rearrange the layers in I/O software starting at the bottom1. User-level I/O software2. Device drivers3. Interrupt handlers4. Hardware5. Device-independent OS software",
    answer: "43251",
    options: [
        "12345", "54321", "15234", "43251"]
}, {
    numb: 87,
    question: "When an external device becomes ready to be serviced by the processor, the device sends this",
    answer: "Interrupt signal",
    options: [
        "None of the other choices", "Halt signal", "Interrupt signal", "Handler signal"]
}, {
    numb: 88,
    question: "Imagine that a certain modem can read 7,000 characters per second and that the time to read a",
    answer: "4% of the CPU",
    options: [
        "4% of the CPU", "7% of the CPU", "96% of the CPU", "93% of the CPU"]
}, {
    numb: 89,
    question: "Assuming that it takes 10 nsec to copy a byte, how much time does it take to completely rewrite the screen of a 1200 x 800 pixel graphics with 24- bit color?",
    answer: "28.8 msec",
    options: [
        "288 msec", "288 micro-sec", "28.8 micro-sec", "28.8 msec"]
}, {
    numb: 90,
    question: "What is asynchronous transfer in principles of I/O software?",
    answer: "The CPU starts the transfer and goes off to do something else until the interrupt arrives",
    options: [
        "The user process makes system call and goes to sleep until other process it wakes up", "None of the other choices", "The user program starts system call to transfer and automatically suspended until the data are available in the buffer", "The CPU starts the transfer and goes off to do something else until the interrupt arrives"]
}, {
    numb: 91,
    question: "Assuming that it takes 10 nsec to copy a byte, how much time, does it take to completely rewrite the screen of a 200 character",
    answer: "40 micro-sec",
    options: [
        "10 micro-sec", "30 micro-sec", "40 micro-sec", "20 micro-sec"]
}, {
    numb: 92,
    question: "Which of the following statements is incorrect about I/O using DMA?",
    answer: "DMA is software solution to speed up data transfer between I/O device and memory",
    options: [
        "None of the other choices", "DMA helps free up the CPU during the I/O to do other work", "DMA helps reduce the number of interrupts", "DMA is software solution to speed up data transfer between I/O device and memory"]
}, {
    numb: 93,
    question: "Which is not a function of device drivers?",
    answer: "To accept abstract read and write request from device independent software above it and see that they are curried",
    options: [
        "To manage its power requirements and log events", "To accept abstract read and write request from device independent software above it and see that they are curried", "To receive system call", "To initialize the device, if needed"]
}, {
    numb: 94,
    question: "The term__________a specialized instruction set.",
    answer: "DMA",
    options: [
        "None of the other choices", "I/O device", "DMA", "Programmed I/O"]
}, {
    numb: 95,
    question: "In a directed graph used to model deadlock, ______represents deadlock.",
    answer: "Cycle",
    options: [
        "Dashed arrow", "Solid arrow", "Any path", "Cycle"]
}, {
    numb: 96,
    question: "All deadlocks involve conflicting needs for resources by",
    answer: "Two or more processes",
    options: [
        "None of the other choices", "Two or more processes", "One or more processes", "Three or more processes"]
}, {
    numb: 97,
    question: "is when, in modern printing systems, a disk accepts output from several users and acts as a",
    answer: "Spooling",
    options: [
        "Lagging", "Spooling", "Spoofing", "Buffering"]
}, {
    numb: 98,
    question: "The permanent blocking of a set of processes that compete for system resources is called",
    answer: "Deadlock",
    options: [
        "Starvation", "None of the other choices", "Deadlock", "Prioritization"]
}, {
    numb: 99,
    question: "Which of the following is not a condition necessary for deadlock to exist?",
    answer: "Preemption condition",
    options: [
        "Hold and wait condition", "Mutual-exclusion condition", "Circular-wait condition", "Preemption condition"]
}, {
    numb: 100,
    question: "In a directed graph used to model deadlock, resources are represented using",
    answer: "Squares.",
    options: [
        "Rectangle", "Circular", "Squares.", "Ellipse"]
}, {
    numb: 101,
    question: "What is the correct approach with the 'Mutual Exclusion condition' to prevent Deadlock?",
    answer: "Spool everything",
    options: [
        "Take resources away", "Request all resources initially", "Spool everything", "Order resources numerically"]
}, {
    numb: 102,
    question: "Which deadlock condition does 'Ordering resources numerically' attack?",
    answer: "Circular-wait condition(Circular wait condition)",
    options: [
        "No preemption", "Circular-wait condition(Circular wait condition)", "Hold and wait", "Mutual exclusion"]
}, {
    numb: 103,
    question: "Which deadlock condition does 'Take resources away' attack?",
    answer: "No preemption",
    options: [
        "Circular-wait condition(Circular wait condition)", "No preemption", "Hold and wait", "Mutual exclusion"]
}, {
    numb: 104,
    question: "What is the weakness of the Banker's algorithm?",
    answer: "Requiring that processes state their maximum needs in advance",
    options: [
        "Enabling processes to hold their resources indefinitely", "Enabling the number of resources to fluctuate", "Requiring that processes state their maximum needs in advance", "Allowing the population of processes to vary over time"]
}, {
    numb: 105,
    question: "Which method is used to prevent the communication deadlock?",
    answer: "Timeouts",
    options: [
        "All of the other choices", "Timeouts", "Handling alarm", "Acknowledge signal"]
}, {
    numb: 106,
    question: "_________is the act of allowing only one process to have access to a dedicated resource",
    answer: "Mutual-exclusion condition(Mutual exclusion condition)",
    options: [
        "Hold and wait condition", "No preemption condition", "Circular-wait condition(Circular wait condition)", "Mutual-exclusion condition(Mutual exclusion condition)"]
}, {
    numb: 107,
    question: "What is the correct approach of the driver of dedicated devices with requesting device that is busy to solve deadlock using Ostrich algorithm?",
    answer: "The device driver decides blocking and returning an error code",
    options: [
        "The device driver stops the current jobs and releases the devices", "The device driver kills those requesting processes", "All of the other choices", "The device driver decides blocking and returning an error code"]
}, {
    numb: 108,
    question: "An example of preemptable resources is",
    answer: "Memory",
    options: [
        "DVD device", "None of the other choices", "CD-ROM device", "Memory"]
}, {
    numb: 109,
    question: "What is true about non-preemptable resources? (non preemptable)",
    answer: "Will cause the process to fail if taken away",
    options: [
        "Can be taken away from a process with no ill effects", "None of the other choices", "Will cause the process to fail if taken away", "Can share among processes"]
}, {
    numb: 110,
    question: "______allows a resource to be held by a process as long as it is needed",
    answer: "Hold and wait condition",
    options: [
        "Hold and wait condition", "Mutual-exclusion condition", "No preemption condition", "Circular-wait condition"]
}, {
    numb: 111,
    question: "____________allows a resource to be held by a process as long as it is needed.",
    answer: "Hold and wait condition",
    options: [
        "No preemption condition", "Hold and wait condition", "Circular-wait condition", "Mutual-exclusion condition"]
}, {
    numb: 112,
    question: "Which of the following is not a step in the boot process?",
    answer: "The antivirus program checks all files for viruses.",
    options: [
        "The antivirus program checks all files for viruses.", "Configuration and customization settings are checked", "The operating system is loaded into RAM.", "The BIOS is activated by powering on the CPU."]
}, {
    numb: 113,
    question: "Which of the following process state transitions is correct, when the scheduler picks a process from the ready queue to run?",
    answer: "Ready -> running",
    options: [
        "Ready -> running", "Running -> ready", "Blocked (waiting) -> ready", "Running -> Blocked (waiting)"]
}, {
    numb: 114,
    question: "Which of a system call is to allow the system free up disk space?",
    answer: "DELETE",
    options: [
        "OPEN", "CLOSE", "SEEK", "DELETE"]
}, {
    numb: 115,
    question: "The following requirement must be met by any facility or capability that is to provide support for mutual exclusion:",
    answer: "All of the other choices",
    options: [
        "Only one process at a time can be allowed into a critical section", "A process remains in its critical region for a finite time only", "No assumption can be made about relative process speeds", "All of the other choices"]
}, {
    numb: 116,
    question: "Which of the following is specified to indicate the directory where the file is located?",
    answer: "Path name",
    options: [
        "Root directory", "Path name", "Extension", "Sub-directory"]
}, {
    numb: 117,
    question: "Which is the correct description of transitions between",
    answer: "1: Process blocks for input; 2: Input becomes available;3: Scheduler picks this process; 4: Scheduler picks another process",
    options: [
        "1: Process blocks for input; 2: Input becomes available;3: Scheduler picks another process; 4: Scheduler picks this process", "1: Process blocks for input; 2: Input becomes available;3: Scheduler picks this process; 4: Scheduler picks another process", "1: Process blocks for input; 2: Scheduler picks thisprocess; 3: Scheduler picks another process; 4: Input becomes available", "1: Process blocks for input; 2: Scheduler picks anotherprocess; 3: Scheduler picks this process; 4: Input becomes available"]
}, {
    numb: 118,
    question: "A________is a group of related records that contains information to be used by specific application programs to generate reports.",
    answer: "File",
    options: [
        "Field", "File", "Record group", "Directory"]
}, {
    numb: 119,
    question: "If a system is deadlocked, no processes can",
    answer: "All of the other choices",
    options: [
        "release resources", "be awakened", "run", "All of the other choices"]
}, {
    numb: 120,
    question: "Which of the following conditions that causes the processes to be terminated, when the processes executes a system call tell the OS to finish some other process?",
    answer: "Normal exit (voluntary)",
    options: [
        "Fatal error (involuntary)", "Error exit (voluntary)", "Normal exit (voluntary)", "Killed by another process (involuntary)"]
}, {
    numb: 121,
    question: "The four main structural elements of a computer system are:",
    answer: "Processor, Main Memory, I/O Modules, System Bus",
    options: [
        "None of the other choices", "Processor, Registers, I/O Modules, Main Memory", "Processor, Main Memory, I/O Modules, System Bus", "Processor, Registers, Main Memory, System Bus"]
}, {
    numb: 122,
    question: "How many percent of the CPU time is wasted, when a computer system has enough room to hold two program and these programs are idle waiting for I/O 10% of the time?",
    answer: "1 %",
    options: [
        "90%", "99%", "None of the other choices", "1 %"]
}, {
    numb: 123,
    question: "Which of the following information bits in the entry of page table is used to indicate Page Fault?",
    answer: "Present/absent bit",
    options: [
        "Status bit", "Modified bit", "Present/absent bit", "Referenced bit"]
}, {
    numb: 124,
    question: "The permanent blocking of a set of processes that compete for system resources is called",
    answer: "Deadlock",
    options: [
        "Prioritization", "Starvation", "Deadlock", "None of the other choices"]
}, {
    numb: 125,
    question: "In terms of speed the best method of Dynamic Storage-Allocation is:",
    answer: "First fit",
    options: [
        "Next fit", "First fit", "Worst fit", "Best fit"]
}, {
    numb: 126,
    question: "Consider a swapping system in which the memory consists of the following hole sizes: 10K, 4K, 20K, 15K, 9K.",
    answer: "9K, 15K, 10K",
    options: [
        "10K, 15K, 20K", "10K, 20K, 15K", "9K, 15K, 10K", "20K, 15K, 10K"]
}, {
    numb: 127,
    question: "In general, which is the best technique for I/O Data transfer?",
    answer: "Direct Memory Access",
    options: [
        "Direct Memory Access", "None of the other choices", "Programmed I/O", "Interrupt-Driven I/O"]
}, {
    numb: 128,
    question: "The task of subdividing memory between the OS and processes is performed automatically by the OS and is",
    answer: "Memory Management",
    options: [
        "Protection", "Memory Management", "Relocation", "All of the other choices"]
}, {
    numb: 129,
    question: "File Structure can be:",
    answer: "All of the other choices",
    options: [
        "Record sequence", "All of the other choices", "Byte sequence", "Tree"]
}, {
    numb: 130,
    question: "_______is a specialized WRITE command for existing data files that allows for appending records or for rewriting selected records in their original place in the file.",
    answer: "REWRITE",
    options: [
        "MODIFY", "UPDATE", "APPEND", "REWRITE"]
}, {
    numb: 131,
    question: "Assume the Memory Manager receives a request for a block of 200. When the best-fit algorithm is used, is the beginning address of the hole granted by the Memory Manager.",
    answer: "7600",
    options: [
        "6785", "7600", "10250", "None"]
}, {
    numb: 132,
    question: "A ____ is a portion of a process that can run independently.",
    answer: "thread",
    options: [
        "subprocess", "thread", "program", "Mini-process"]
}, {
    numb: 133,
    question: "An arrival message causes the system to create a new thread to handle this message. This new thread is call",
    answer: "Pop-up",
    options: [
        "Activator", "Pop-up", "Upcall", "Distributed"]
}, {
    numb: 134,
    question: "Which of a system call is to allow the system fetch the attributes and list of disk addresses into main memory for rapid access on later call?",
    answer: "RENAME",
    options: [
        "SEEK", "OPEN", "RENAME", "CLOSE"]
}, {
    numb: 135,
    question: "Which of the following statements is incorrect about I/O using DMA?",
    answer: "DMA is software solution to speed up data transfer between I/O device and memory",
    options: [
        "DMA helps free up the CPU during the I/O to do other work", "None of the other choices", "DMA is software solution to speed up data transfer between I/O device and memory", "DMA helps reduce the number of interrupts"]
}, {
    numb: 136,
    question: "Which of the following actions generates an external interrupt?",
    answer: "An input/output operation is completed.",
    options: [
        "A page that does not exist in the main memory is accessed by the virtual storage management.", "An input/output operation is completed.", "Division by zero occurs.", "A system call instruction is executed."]
}, {
    numb: 137,
    question: "Which of the following instructions should be allowed only in kernel mode?",
    answer: "Disable all interrupts",
    options: [
        "AND of two numbers", "ADD of two numbers", "Read the time-of-day clock", "Disable all interrupts"]
}, {
    numb: 138,
    question: "Which of the following statements about Electrically Erasable PROM (EEPROM) is correct?",
    answer: "...",
    options: [
        "Volatile", "Can be erased and rewritten", "Unprogrammable", "None of the other choices"]
}, {
    numb: 139,
    question: "An example of preemptable resources is",
    answer: "Memory",
    options: [
        "DVD device", "Memory", "None of the other choices", "CD-ROM device"]
}, {
    numb: 140,
    question: "What is true about preemptable resources?",
    answer: "Will cause the process to fail if taken away",
    options: [
        "Can share among processes", "Can be taken away from a process with no ill effects", "None of the other choices", "Will cause the process to fail if taken away"]
}, {
    numb: 141,
    question: "If in a resource-allocation graph, each resource type has exactly one instance, which of the following indicate a",
    answer: "The graph has at least one cycle.",
    options: [
        "The graph is connected", "The graph has at least one cycle.", "The graph has no cycle.", "The graph is not connected."]
}, {
    numb: 142,
    question: "The term__________a specialized instruction set.",
    answer: "DMA",
    options: [
        "None of the other choices", "I/O device", "DMA", "Programmed I/O"]
}, {
    numb: 143,
    question: "Which of the following allocation methods the i-nodes use?",
    answer: "Indexed allocation",
    options: [
        "Linked allocation using FAT", "Indexed allocation", "Linked allocation", "Contiguous allocation"]
}, {
    numb: 144,
    question: "In a system employing a paging scheme for memory management , wasted space is due to:",
    answer: "Internal fragmentation",
    options: [
        "Internal fragmentation", "None of the other choices", "External fragmentation", "Pages and frames of different specified sizes"]
}, {
    numb: 145,
    question: "When a virtual memory system manages memory in fixed length units, which of the following terms",
    answer: "Page",
    options: [
        "Block", "Page", "Frame", "Segment"]
}, {
    numb: 146,
    question: "In terms of disk storage efficiency, the method of 'Backing up pages dynamically' in comparison with",
    answer: "Better",
    options: [
        "Worse", "Better", "Nearly equal", "Equal"]
}, {
    numb: 147,
    question: "When there is an excessive amount of page swapping between main memory and secondary",
    answer: "thrashing",
    options: [
        "thrashing", "Over swapping", "hot swapping", "excessive demand paging"]
}, {
    numb: 148,
    question: "Which of the following statements is incorrect about Translation Look-aside Buffer (TLB)?",
    answer: "A TLB miss implies a disk operation will follow",
    options: [
        "None of the other choices", "A TLB is sometimes known as an associative memory", "A TLB miss implies a disk operation will follow", "Each entry of a TLB contains the information about one page, including the virtual page number and"]
}, {
    numb: 149,
    question: "When a virtual memory system manages memory in fixed length units, which of the following terms",
    answer: "Page",
    options: [
        "Page", "Frame", "Block", "Segment"]
}, {
    numb: 150,
    question: "Consider a swapping system in which the memory consists of the following hole sizes: 10 K, 4 K, 20 K, 15",
    answer: "10 K, 20 K, 15 K",
    options: [
        "9 K, 15 K, 10 K", "10 K, 20 K, 15 K", "20 K, 15 K, 4 K", "None of the other choices"]
}, {
    numb: 151,
    question: "Which of the following information bits in the entry of page table is false?",
    answer: "Present/absent bit",
    options: [
        "Present/absent bit", "Modified bit", "Protection bit", "Mode bit"]
}, {
    numb: 152,
    question: "Which of the following is appropriate to determine program size and create page table?",
    answer: "Process creation",
    options: [
        "Process termination time", "Page fault time", "Process creation", "Process execution"]
}, {
    numb: 153,
    question: "Which of these statements about the algorithm 'Next fit' is true?",
    answer: "Memory Manager starting searching the list of segments from the place where it left off last time.",
    options: [
        "Memory Manager starting searching the list of segments from the place where it left off last time.", "Memory Manager scans along the list of segments until it finds a hole that is big enough.", "Memory Manager searches the entire list of segments from beginning to end and take smallest hole that is", "None of the other choices"]
}, {
    numb: 154,
    question: "In a system employing a paging scheme for memory management , wasted space is due to:",
    answer: "Internal fragmentation",
    options: [
        "None of the other choices", "Internal fragmentation", "Pages and frames of different specified sizes", "External fragmentation"]
}, {
    numb: 155,
    question: "Which of the following information bits in the entry of page table is used to indicate Page Fault?",
    answer: "Present/absent bit",
    options: [
        "Status bit", "Present/absent bit", "Referenced bit", "Modified bit"]
}, {
    numb: 156,
    question: "Which of the following is a method to keep track of memory usages?",
    answer: "Both Memory Management with Bit Maps and Memory Management with Linked Lists",
    options: [
        "Memory Management with Linked Lists", "Memory Management with Bit Maps", "Both Memory Management with Bit Maps and Memory Management with Linked Lists", "None of the other choices"]
}, {
    numb: 157,
    question: "Suppose a virtual address space of 2^28 words and the page size is 2^12 words. If the virtual",
    answer: "1234",
    options: [
        "12345", "123456", "1234", "123"]
}, {
    numb: 158,
    question: "A page fault means that we referenced a page",
    answer: "That was not in main memory",
    options: [
        "With an incorrect I/O request", "That was not in main memory", "That was not in secondary storage", "That was outside the memory boundaries"]
}, {
    numb: 159,
    question: "A computer has 2GB RAM of which the operating system occupies 1GB. The processes are all 450 MB and have the same characteristics. How many percent is CPU utilization when these programs are idle waiting for I/O 20% of the time?",
    answer: "None of the other choices",
    options: [
        "4%", "90%", "None of the other choices", "96%"]
}, {
    numb: 160,
    question: "Which of the events that causes the processes to be created, when an operation system is booted?",
    answer: "System initialization",
    options: [
        "Execution of a process creation system cal", "Initiation of a batch job", "User request to create a new process", "System initialization"]
}, {
    numb: 161,
    question: "Which conditions of mutual exclusion does the Lock Variables (Software proposal) violate?",
    answer: "No two processes simultaneously in critical region",
    options: [
        "No process must wait forever to enter its critical region", "No two processes simultaneously in critical region", "No process running outside its critical region may block another process", "No assumptions made about speeds or numbers of CPUs"]
}, {
    numb: 162,
    question: "Deadlock definition:",
    answer: "The event is release of a currently held resource",
    options: [
        "The event is release of a currently held resource", "The event is some mouse click", "The event is press some key on keyboard", "None of the other choices"]
}, {
    numb: 163,
    question: "An interrupt that leaves the machine in well-defined state is called a(n)",
    answer: "Precise interrupt",
    options: [
        "Precise interrupt", "Disappointed interrupt", "Required interrupt", "Imprecise interrupt"]
}, {
    numb: 164,
    question: "Which of following statements about the memory hierarchy is false?",
    answer: "None of the other choices",
    options: [
        "Small amount of fast expensive memory - cache", "Gigabytes of slow cheap disk storage", "None of the other choices", "Some medium-speed medium price main memory"]
}, {
    numb: 165,
    question: "Which is the fastest bus in the IBM PC computer?",
    answer: "ISA (Industry Standard Architecture)",
    options: [
        "ISA (Industry Standard Architecture)", "USB (Universal Serial BUS)", "IDE (Integrated Drive Electronic)", "PCI (Peripheral Component Interconnect)"]
}, {
    numb: 166,
    question: "Assume the following events and actions take place. The following statement is true. Event Action",
    answer: "There is no deadlock",
    options: [
        "There is no deadlock", "Event 5 caused deadlock.", "Event 4 caused deadlock", "Event 6 caused deadlock."]
}, {
    numb: 167,
    question: "If a system is deadlocked, no processes can",
    answer: "All of the other choices",
    options: [
        "release resources", "be awakened", "run", "All of the other choices"]
}, {
    numb: 168,
    question: "The absolute pathname of a file in Linux is with respect to the",
    answer: "All of the other choices",
    options: [
        "Home directory", "Root directory on the system", "All of the other choices", "Login directory"]
}, {
    numb: 169,
    question: "Which of the following statement is correct about a disadvantage of memory-mapped I/O?",
    answer: "Caching a device control register would be disastrous",
    options: [
        "Caching a device control register would be disastrous", "Programs can use 1 instructions to test whether the device is ready", "Since the control registers of devices are mapped into the memory space, device drivers can be written in C", "No special protection mechanism needed to keep user processes from performing I/O"]
}, {
    numb: 170,
    question: "As one proceeds down the memory hierarchy (from inboard memory to offline storage), the following conditions apply:",
    answer: "All of the other choices",
    options: [
        "Increasing capacity", "Decreasing cost per bit", "All of the other choices", "Increasing access time"]
}, {
    numb: 171,
    question: "Which classes of I/O devices that Clock belong to?",
    answer: "None of the other choices",
    options: [
        "Stream devices", "Block devices", "Character devices", "None of the other choices"]
}, {
    numb: 172,
    question: "Operating system abstraction supports the ability to have operation even when there is only one CPU available",
    answer: "pseudoparallelism",
    options: [
        "None of the other choices", "parallel", "multiple", "pseudoparallelism"]
}, {
    numb: 173,
    question: "A computer has 2GB RAM of which the operating system occupies 1GB. The processes are all 450 MB and have the same characteristics. How many percent is CPU utilization when these programs are idle waiting for I/O 20% of the time?",
    answer: "None of the other choices (97,3%)",
    options: [
        "4%", "90%", "None of the other choices (97,3%)", "96%"]
}, {
    numb: 174,
    question: "The page size that is too small wil l generate",
    answer: "Very long Page tables",
    options: [
        "More difficult to calculate actual position", "Excessive internal fragmentation", "Very long Page tables", "Excessive external fragmentation"]
}, {
    numb: 175,
    question: "Which of the following statements is not correct about the device controller of I/O devices?",
    answer: "Is software component of device",
    options: [
        "Is also called adapter", "Can handle two, four, or even eight identical devices", "Is electronic component of device", "Is software component of device"]
}, {
    numb: 176,
    question: "In a directed graph used to model deadlock, processes are represented using",
    answer: "Circular",
    options: [
        "Rectangle", "Circular", "Squares", "Ellipse"]
}, {
    numb: 177,
    question: "How many categories can be the I/O devices roughly divided?",
    answer: "2",
    options: [
        "3", "2", "4", "1"]
}, {
    numb: 178,
    question: "What is not the technique of implementation for Virtual Memory?",
    answer: "Partition",
    options: [
        "All of the other choices", "Paging", "Segmentation", "Partition"]
}, {
    numb: 179,
    question: "Which is special file?",
    answer: "Both character special file and block special file",
    options: [
        "None of the other choices", "block special file", "character special file", "Both character special file and block special file"]
}, {
    numb: 180,
    question: "DMA operations require the following information from the processor",
    answer: "All of the other choices",
    options: [
        "Starting memory location to read from and write to", "All of the other choices", "Address of I/O device", "Number of words to be read or written"]
}, {
    numb: 181,
    question: "In the memory-mapped I/O system, in order that CPU communicates with the control registers in the devices, the control register is assigned :",
    answer: "None of the other choices",
    options: [
        "Index", "Unique memory address", "I/O address", "None of the other choices"]
}, {
    numb: 182,
    question: "Which of special register contains the condition code bits, the CPU priority, the mode bit and other control bits?",
    answer: "Program Status Word (PSW)",
    options: [
        "Program Status Word (PSW)", "None of the other choices", "Instruction Register (IR)", "Program Counter (PC)"]
}, {
    numb: 183,
    question: "_________is when each process involved in the impasse is waiting for another to voluntarily release the resource so that at least one wil l be able to continue on.",
    answer: "Circular-wait condition",
    options: [
        "Hold and wait condition", "No preemption condition", "Mutual-exclusion condition", "Circular-wait condition"]
}, {
    numb: 184,
    question: "There are ___________entries per page in the Page table.",
    answer: "2",
    options: [
        "1", "3", "2", "4"]
}, {
    numb: 185,
    question: "Which of these statements about the algorithm 'Worst fit' is true?",
    answer: "None of the other choices (largest hole)",
    options: [
        "Memory Manager starting searching the list of segments from the place where it left off last time.", "Memory Manager scans along the list of segments until it finds a hole that is big enough.", "Memory Manager searches the entire list of segments from beginning to end and take smallest hole that is adequate.", "None of the other choices (largest hole)"]
}, {
    numb: 186,
    question: "Which of the following file structure is used for file system in Window?",
    answer: "Tree",
    options: [
        "Tree", "Record sequence", "Byte sequence", "Ring"]
}, {
    numb: 187,
    question: "A CPU may have separate fetch, decode and execute units, so that can carry out three steps of the three",
    answer: "Pipeline",
    options: [
        "Multicore", "Pipeline", "None of the other choices", "Superscalar"]
}, {
    numb: 188,
    question: "____________allows a resource to be held by a process as long as it is needed.",
    answer: "Hold and wait condition",
    options: [
        "No preemption condition", "Hold and wait condition", "Circular-wait condition", "Mutual-exclusion condition"]
}, {
    numb: 189,
    question: "Which of the following is not a step in the boot process?",
    answer: "The antivirus program checks all files for viruses.",
    options: [
        "The antivirus program checks all files for viruses.", "Configuration and customization settings are checked", "The operating system is loaded into RAM.", "The BIOS is activated by powering on the CPU."]
}, {
    numb: 190,
    question: "Which of the following process state transitions is correct, when the scheduler picks a process from the ready queue to run?",
    answer: "Ready -> running",
    options: [
        "Ready -> running", "Running -> ready", "Blocked (waiting) -> ready", "Running -> Blocked (waiting)"]
}, {
    numb: 191,
    question: "Which of a system call is to allow the system free up disk space?",
    answer: "DELETE",
    options: [
        "OPEN", "CLOSE", "SEEK", "DELETE"]
}, {
    numb: 192,
    question: "The following requirement must be met by any facility or capability that is to provide support for mutual exclusion:",
    answer: "All of the other choices",
    options: [
        "Only one process at a time can be allowed into a critical section", "A process remains in its critical region for a finite time only", "No assumption can be made about relative process speeds", "All of the other choices"]
}, {
    numb: 193,
    question: "Which of the following is specified to indicate the directory where the file is located?",
    answer: "Path name",
    options: [
        "Root directory", "Path name", "Extension", "Sub-directory"]
}, {
    numb: 194,
    question: "Which is the correct description of transitions between process states below? (see picture)",
    answer: "1: Process blocks for input; 2: Scheduler picks another process; 3: Scheduler picks this process; 4: Input becomes available",
    options: [
        "1: Process blocks for input; 2: Input becomes available;3: Scheduler picks another process; 4: Scheduler picks this process", "1: Process blocks for input; 2: Input becomes available; 3: Scheduler picks this process; 4: Scheduler picks another process", "1: Process blocks for input; 2: Scheduler picks this process; 3: Scheduler picks another process; 4: Input becomes available", "1: Process blocks for input; 2: Scheduler picks another process; 3: Scheduler picks this process; 4: Input becomes available"]
}, {
    numb: 195,
    question: "A________is a group of related records that contains information to be used by specific application programs to generate reports.",
    answer: "File",
    options: [
        "Field", "File", "Record group", "Directory"]
}, {
    numb: 196,
    question: "If a system is deadlocked, no processes can",
    answer: "All of the other choices",
    options: [
        "release resources", "be awakened", "run", "All of the other choices"]
}, {
    numb: 197,
    question: "Which of the following conditions that causes the processes to be terminated, when the processes executes a system call tell the OS to finish some other process?",
    answer: "Normal exit (voluntary)",
    options: [
        "Fatal error (involuntary)", "Error exit (voluntary)", "Normal exit (voluntary)", "Killed by another process (involuntary)"]
}, {
    numb: 198,
    question: "The four main structural elements of a computer system are:",
    answer: "Processor, Main Memory, I/O Modules, System Bus",
    options: [
        "None of the other choices", "Processor, Registers, I/O Modules, Main Memory", "Processor, Main Memory, I/O Modules, System Bus", "Processor, Registers, Main Memory, System Bus"]
}, {
    numb: 199,
    question: "How many percent of the CPU time is wasted, when a computer system has enough room to hold two program and these programs are idle waiting for I/O 10% of the time?",
    answer: "1 %",
    options: [
        "90%", "99%", "None of the other choices", "1 %"]
}, {
    numb: 200,
    question: "Which of the following information bits in the entry of page table is used to indicate Page Fault?",
    answer: "Present/absent bit",
    options: [
        "Status bit", "Modified bit", "Present/absent bit", "Referenced bit"]
}, {
    numb: 201,
    question: "The permanent blocking of a set of processes that compete for system resources is called",
    answer: "Deadlock",
    options: [
        "Prioritization", "Starvation", "Deadlock", "None of the other choices"]
}, {
    numb: 202,
    question: "In terms of speed the best method of Dynamic Storage-Allocation is:",
    answer: "First fit",
    options: [
        "Next fit", "First fit", "Worst fit", "Best fit"]
}, {
    numb: 203,
    question: "Consider a swapping system in which the memory consists of the following hole sizes: 10K, 4K, 20K, 15K, 9K.",
    answer: "9K, 15K, 10K",
    options: [
        "10K, 15K, 20K", "10K, 20K, 15K", "9K, 15K, 10K", "20K, 15K, 10K"]
}, {
    numb: 204,
    question: "In general, which is the best technique for I/O Data transfer?",
    answer: "Direct Memory Access",
    options: [
        "Direct Memory Access", "None of the other choices", "Programmed I/O", "Interrupt-Driven I/O"]
}, {
    numb: 205,
    question: "The task of subdividing memory between the OS and processes is performed automatically by the OS and is",
    answer: "Memory Management",
    options: [
        "Protection", "Memory Management", "Relocation", "All of the other choices"]
}, {
    numb: 206,
    question: "File Structure can be:",
    answer: "All of the other choices",
    options: [
        "Record sequence", "All of the other choices", "Byte sequence", "Tree"]
}, {
    numb: 207,
    question: "_______is a specialized WRITE command for existing data files that allows for appending records or for rewriting selected records in their original place in the file.",
    answer: "REWRITE",
    options: [
        "MODIFY", "UPDATE", "APPEND", "REWRITE"]
}, {
    numb: 208,
    question: "Assume the Memory Manager receives a request for a block of 200. When the best-fit algorithm is used, is the beginning address of the hole granted by the Memory Manager.",
    answer: "7600",
    options: [
        "6785", "7600", "10250", "None"]
}, {
    numb: 209,
    question: "A ____ is a portion of a process that can run independently.",
    answer: "thread",
    options: [
        "subprocess", "thread", "program", "Mini-process"]
}, {
    numb: 210,
    question: "An arrival message causes the system to create a new thread to handle this message. This new thread is call",
    answer: "Pop-up",
    options: [
        "Activator", "Pop-up", "Upcall", "Distributed"]
}, {
    numb: 211,
    question: "Which of a system call is to allow the system fetch the attributes and list of disk addresses into main memory for rapid access on later call?",
    answer: "RENAME",
    options: [
        "SEEK", "OPEN", "RENAME", "CLOSE"]
}, {
    numb: 212,
    question: "Which of the following statements is incorrect about I/O using DMA?",
    answer: "DMA is software solution to speed up data transfer between I/O device and memory",
    options: [
        "DMA helps free up the CPU during the I/O to do other work", "None of the other choices", "DMA is software solution to speed up data transfer between I/O device and memory", "DMA helps reduce the number of interrupts"]
}, {
    numb: 213,
    question: "Which of the following actions generates an external interrupt?",
    answer: "An input/output operation is completed.",
    options: [
        "A page that does not exist in the main memory is accessed by the virtual storage management.", "An input/output operation is completed.", "Division by zero occurs.", "A system call instruction is executed."]
}, {
    numb: 214,
    question: "Which of the following instructions should be allowed only in kernel mode?",
    answer: "Disable all interrupts",
    options: [
        "AND of two numbers", "ADD of two numbers", "Read the time-of-day clock", "Disable all interrupts"]
}, {
    numb: 215,
    question: "Which of the following statements about Electrically Erasable PROM (EEPROM) is correct?",
    answer: "...",
    options: [
        "Volatile", "Can be erased and rewritten", "Unprogrammable", "None of the other choices"]
}, {
    numb: 216,
    question: "An example of preemptable resources is",
    answer: "Memory",
    options: [
        "DVD device", "Memory", "None of the other choices", "CD-ROM device"]
}, {
    numb: 217,
    question: "What is true about preemptable resources?",
    answer: "Will cause the process to fail if taken away",
    options: [
        "Can share among processes", "Can be taken away from a process with no ill effects", "None of the other choices", "Will cause the process to fail if taken away"]
}, {
    numb: 218,
    question: "If in a resource-allocation graph, each resource type has exactly one instance, which of the following indicate a",
    answer: "The graph has at least one cycle.",
    options: [
        "The graph is connected", "The graph has at least one cycle.", "The graph has no cycle.", "The graph is not connected."]
}, {
    numb: 219,
    question: "The term__________a specialized instruction set.",
    answer: "DMA",
    options: [
        "None of the other choices", "I/O device", "DMA", "Programmed I/O"]
}, {
    numb: 220,
    question: "Which of the following allocation methods the i-nodes use?",
    answer: "Indexed allocation",
    options: [
        "Linked allocation using FAT", "Indexed allocation", "Linked allocation", "Contiguous allocation"]
}, {
    numb: 221,
    question: "In a system employing a paging scheme for memory management , wasted space is due to:",
    answer: "Internal fragmentation",
    options: [
        "Internal fragmentation", "None of the other choices", "External fragmentation", "Pages and frames of different specified sizes"]
}, {
    numb: 222,
    question: "When a virtual memory system manages memory in fixed length units, which of the following terms",
    answer: "Page",
    options: [
        "Block", "Page", "Frame", "Segment"]
}, {
    numb: 223,
    question: "In terms of disk storage efficiency, the method of 'Backing up pages dynamically' in comparison with",
    answer: "Better",
    options: [
        "Worse", "Better", "Nearly equal", "Equal"]
}, {
    numb: 224,
    question: "When there is an excessive amount of page swapping between main memory and secondary",
    answer: "thrashing",
    options: [
        "thrashing", "Over swapping", "hot swapping", "excessive demand paging"]
}, {
    numb: 225,
    question: "Which of the following statements is incorrect about Translation Look-aside Buffer (TLB)?",
    answer: "A TLB miss implies a disk operation will follow",
    options: [
        "None of the other choices", "A TLB is sometimes known as an associative memory", "A TLB miss implies a disk operation will follow", "Each entry of a TLB contains the information about one page, including the virtual page number and"]
}, {
    numb: 226,
    question: "When a virtual memory system manages memory in fixed length units, which of the following terms",
    answer: "Page",
    options: [
        "Page", "Frame", "Block", "Segment"]
}, {
    numb: 227,
    question: "Consider a swapping system in which the memory consists of the following hole sizes: 10 K, 4 K, 20 K, 15",
    answer: "10 K, 20 K, 15 K",
    options: [
        "9 K, 15 K, 10 K", "10 K, 20 K, 15 K", "20 K, 15 K, 4 K", "None of the other choices"]
}, {
    numb: 228,
    question: "Which of the following information bits in the entry of page table is false?",
    answer: "Present/absent bit",
    options: [
        "Present/absent bit", "Modified bit", "Protection bit", "Mode bit"]
}, {
    numb: 229,
    question: "Which of the following is appropriate to determine program size and create page table?",
    answer: "Process creation",
    options: [
        "Process termination time", "Page fault time", "Process creation", "Process execution"]
}, {
    numb: 230,
    question: "Which of these statements about the algorithm 'Next fit' is true?",
    answer: "Memory Manager starting searching the list of segments from the place where it left off last time.",
    options: [
        "Memory Manager starting searching the list of segments from the place where it left off last time.", "Memory Manager scans along the list of segments until it finds a hole that is big enough.", "Memory Manager searches the entire list of segments from beginning to end and take smallest hole that is", "None of the other choices"]
}, {
    numb: 231,
    question: "In a system employing a paging scheme for memory management , wasted space is due to:",
    answer: "Internal fragmentation",
    options: [
        "None of the other choices", "Internal fragmentation", "Pages and frames of different specified sizes", "External fragmentation"]
}, {
    numb: 232,
    question: "Which of the following information bits in the entry of page table is used to indicate Page Fault?",
    answer: "Present/absent bit",
    options: [
        "Status bit", "Present/absent bit", "Referenced bit", "Modified bit"]
}, {
    numb: 233,
    question: "Which of the following is a method to keep track of memory usages?",
    answer: "Both Memory Management with Bit Maps and Memory Management with Linked Lists",
    options: [
        "Memory Management with Linked Lists", "Memory Management with Bit Maps", "Both Memory Management with Bit Maps and Memory Management with Linked Lists", "None of the other choices"]
}, {
    numb: 234,
    question: "Suppose a virtual address space of 2^28 words and the page size is 2^12 words. If the virtual",
    answer: "1234",
    options: [
        "12345", "123456", "1234", "123"]
}, {
    numb: 235,
    question: "A page fault means that we referenced a page",
    answer: "That was not in main memory",
    options: [
        "With an incorrect I/O request", "That was not in main memory", "That was not in secondary storage", "That was outside the memory boundaries"]
}, {
    numb: 236,
    question: "Which of the events that causes the processes to be created, when an operation system is booted?",
    answer: "System initialization",
    options: [
        "Execution of a process creation system cal", "Initiation of a batch job", "User request to create a new process", "System initialization"]
}, {
    numb: 237,
    question: "Which conditions of mutual exclusion does the Lock Variables (Software proposal) violate?",
    answer: "No two processes simultaneously in critical region",
    options: [
        "No process must wait forever to enter its critical region", "No two processes simultaneously in critical region", "No process running outside its critical region may block another process", "No assumptions made about speeds or numbers of CPUs"]
}, {
    numb: 238,
    question: "Deadlock definition:",
    answer: "The event is release of a currently held resource",
    options: [
        "The event is release of a currently held resource", "The event is some mouse click", "The event is press some key on keyboard", "None of the other choices"]
}, {
    numb: 239,
    question: "An interrupt that leaves the machine in well-defined state is called a(n)",
    answer: "Precise interrupt",
    options: [
        "Precise interrupt", "Disappointed interrupt", "Required interrupt", "Imprecise interrupt"]
}, {
    numb: 240,
    question: "Which of following statements about the memory hierarchy is false?",
    answer: "None of the other choices",
    options: [
        "Small amount of fast expensive memory - cache", "Gigabytes of slow cheap disk storage", "None of the other choices", "Some medium-speed medium price main memory"]
}, {
    numb: 241,
    question: "Which is the fastest bus in the IBM PC computer?",
    answer: "ISA (Industry Standard Architecture)",
    options: [
        "ISA (Industry Standard Architecture)", "USB (Universal Serial BUS)", "IDE (Integrated Drive Electronic)", "PCI (Peripheral Component Interconnect)"]
}, {
    numb: 242,
    question: "Assume the following events and actions take place. The following statement is true. Event Action",
    answer: "There is no deadlock",
    options: [
        "There is no deadlock", "Event 5 caused deadlock.", "Event 4 caused deadlock", "Event 6 caused deadlock."]
}, {
    numb: 243,
    question: "If a system is deadlocked, no processes can",
    answer: "All of the other choices",
    options: [
        "release resources", "be awakened", "run", "All of the other choices"]
}, {
    numb: 244,
    question: "The absolute pathname of a file in Linux is with respect to the",
    answer: "All of the other choices",
    options: [
        "Home directory", "Root directory on the system", "All of the other choices", "Login directory"]
}, {
    numb: 245,
    question: "Which of the following statement is correct about a disadvantage of memory-mapped I/O?",
    answer: "Caching a device control register would be disastrous",
    options: [
        "Caching a device control register would be disastrous", "Programs can use 1 instructions to test whether the device is ready", "Since the control registers of devices are mapped into the memory space, device drivers can be written in C", "No special protection mechanism needed to keep user processes from performing I/O"]
}, {
    numb: 246,
    question: "As one proceeds down the memory hierarchy (from inboard memory to offline storage), the following conditions apply:",
    answer: "All of the other choices",
    options: [
        "Increasing capacity", "Decreasing cost per bit", "All of the other choices", "Increasing access time"]
}, {
    numb: 247,
    question: "Which classes of I/O devices that Clock belong to?",
    answer: "None of the other choices",
    options: [
        "Stream devices", "Block devices", "Character devices", "None of the other choices"]
}, {
    numb: 248,
    question: "Operating system abstraction supports the ability to have operation even when there is only one CPU available",
    answer: "pseudoparallelism",
    options: [
        "None of the other choices", "parallel", "multiple", "pseudoparallelism"]
}, {
    numb: 249,
    question: "A computer has 2GB RAM of which the operating system occupies 1GB. The processes are all 450 MB and have the same characteristics. How many percent is CPU utilization when these programs are idle waiting for I/O 20% of the time?",
    answer: "None of the other choices",
    options: [
        "4%", "90%", "None of the other choices", "96%"]
}, {
    numb: 250,
    question: "The page size that is too small wil l generate",
    answer: "Very long Page tables",
    options: [
        "More difficult to calculate actual position", "Excessive internal fragmentation", "Very long Page tables", "Excessive external fragmentation"]
}, {
    numb: 251,
    question: "Which of the following statements is not correct about the device controller of I/O devices?",
    answer: "Is software component of device",
    options: [
        "Is also called adapter", "Can handle two, four, or even eight identical devices", "Is electronic component of device", "Is software component of device"]
}, {
    numb: 252,
    question: "In a directed graph used to model deadlock, processes are represented using",
    answer: "Circular",
    options: [
        "Rectangle", "Circular", "Squares", "Ellipse"]
}, {
    numb: 253,
    question: "How many categories can be the I/O devices roughly divided?",
    answer: "2",
    options: [
        "3", "2", "4", "1"]
}, {
    numb: 254,
    question: "What is not the technique of implementation for Virtual Memory?",
    answer: "Partition",
    options: [
        "All of the other choices", "Paging", "Segmentation", "Partition"]
}, {
    numb: 255,
    question: "Which is special file?",
    answer: "Both character special file and block special file",
    options: [
        "None of the other choices", "block special file", "character special file", "Both character special file and block special file"]
}, {
    numb: 256,
    question: "DMA operations require the following information from the processor",
    answer: "All of the other choices",
    options: [
        "Starting memory location to read from and write to", "All of the other choices", "Address of I/O device", "Number of words to be read or written"]
}, {
    numb: 257,
    question: "In the memory-mapped I/O system, in order that CPU communicates with the control registers in the devices, the control register is assigned :",
    answer: "None of the other choices",
    options: [
        "Index", "Unique memory address", "I/O address", "None of the other choices"]
}, {
    numb: 258,
    question: "Which of special register contains the condition code bits, the CPU priority, the mode bit and other control bits?",
    answer: "Program Status Word (PSW)",
    options: [
        "Program Status Word (PSW)", "None of the other choices", "Instruction Register (IR)", "Program Counter (PC)"]
}, {
    numb: 259,
    question: "_________is when each process involved in the impasse is waiting for another to voluntarily release the resource so that at least one wil l be able to continue on.",
    answer: "Circular-wait condition",
    options: [
        "Hold and wait condition", "No preemption condition", "Mutual-exclusion condition", "Circular-wait condition"]
}, {
    numb: 260,
    question: "There are ___________entries per page in the Page table.",
    answer: "2",
    options: [
        "1", "3", "2", "4"]
}, {
    numb: 261,
    question: "Which of these statements about the algorithm 'Worst fit' is true?",
    answer: "None of the other choices (largest hole)",
    options: [
        "Memory Manager starting searching the list of segments from the place where it left off last time.", "Memory Manager scans along the list of segments until it finds a hole that is big enough.", "Memory Manager searches the entire list of segments from beginning to end and take smallest hole that is adequate.", "None of the other choices (largest hole)"]
}, {
    numb: 262,
    question: "Which of the following file structure is used for file system in Window?",
    answer: "Tree",
    options: [
        "Tree", "Record sequence", "Byte sequence", "Ring"]
}, {
    numb: 263,
    question: "A CPU may have separate fetch, decode and execute units, so that can carry out three steps of the three",
    answer: "Pipeline",
    options: [
        "Multicore", "Pipeline", "None of the other choices", "Superscalar"]
}, {
    numb: 264,
    question: "The term__________a specialized instruction set.",
    answer: "DMA",
    options: [
        "None of the other choices", "I/O device", "DMA", "Programmed I/O"]
}, {
    numb: 265,
    question: "Which of the following allocation methods the i-nodes use?",
    answer: "Indexed allocation",
    options: [
        "Linked allocation using FAT", "Indexed allocation", "Linked allocation", "Contiguous allocation"]
}, {
    numb: 266,
    question: "In a system employing a paging scheme for memory management , wasted space is due to:",
    answer: "Internal fragmentation",
    options: [
        "Internal fragmentation", "None of the other choices", "External fragmentation", "Pages and frames of different specified sizes"]
}, {
    numb: 267,
    question: "When a virtual memory system manages memory in fixed length units, which of the following terms",
    answer: "Page",
    options: [
        "Block", "Page", "Frame", "Segment"]
}, {
    numb: 268,
    question: "In terms of disk storage efficiency, the method of 'Backing up pages dynamically' in comparison with",
    answer: "Better",
    options: [
        "Worse", "Better", "Nearly equal", "Equal"]
}, {
    numb: 269,
    question: "When there is an excessive amount of page swapping between main memory and secondary",
    answer: "thrashing",
    options: [
        "thrashing", "Over swapping", "hot swapping", "excessive demand paging"]
}, {
    numb: 270,
    question: "Which of the following statements is incorrect about Translation Look-aside Buffer (TLB)?",
    answer: "A TLB miss implies a disk operation will follow",
    options: [
        "None of the other choices", "A TLB is sometimes known as an associative memory", "A TLB miss implies a disk operation will follow", "Each entry of a TLB contains the information about one page, including the virtual page number and"]
}, {
    numb: 271,
    question: "When a virtual memory system manages memory in fixed length units, which of the following terms",
    answer: "Page",
    options: [
        "Page", "Frame", "Block", "Segment"]
}, {
    numb: 272,
    question: "Consider a swapping system in which the memory consists of the following hole sizes: 10 K, 4 K, 20 K, 15",
    answer: "10 K, 20 K, 15 K",
    options: [
        "9 K, 15 K, 10 K", "10 K, 20 K, 15 K", "20 K, 15 K, 4 K", "None of the other choices"]
}, {
    numb: 273,
    question: "Which of the following information bits in the entry of page table is false?",
    answer: "Present/absent bit",
    options: [
        "Present/absent bit", "Modified bit", "Protection bit", "Mode bit"]
}, {
    numb: 274,
    question: "Which of the following is appropriate to determine program size and create page table?",
    answer: "Process creation",
    options: [
        "Process termination time", "Page fault time", "Process creation", "Process execution"]
}, {
    numb: 275,
    question: "Which of these statements about the algorithm 'Next fit' is true?",
    answer: "Memory Manager starting searching the list of segments from the place where it left off last time.",
    options: [
        "Memory Manager starting searching the list of segments from the place where it left off last time.", "Memory Manager scans along the list of segments until it finds a hole that is big enough.", "Memory Manager searches the entire list of segments from beginning to end and take smallest hole that is", "None of the other choices"]
}, {
    numb: 276,
    question: "In a system employing a paging scheme for memory management , wasted space is due to:",
    answer: "Internal fragmentation",
    options: [
        "None of the other choices", "Internal fragmentation", "Pages and frames of different specified sizes", "External fragmentation"]
}, {
    numb: 277,
    question: "Which of the following information bits in the entry of page table is used to indicate Page Fault?",
    answer: "Present/absent bit",
    options: [
        "Status bit", "Present/absent bit", "Referenced bit", "Modified bit"]
}, {
    numb: 278,
    question: "Which of the following is a method to keep track of memory usages?",
    answer: "Both Memory Management with Bit Maps and Memory Management with Linked Lists",
    options: [
        "Memory Management with Linked Lists", "Memory Management with Bit Maps", "Both Memory Management with Bit Maps and Memory Management with Linked Lists", "None of the other choices"]
}, {
    numb: 279,
    question: "Suppose a virtual address space of 2^28 words and the page size is 2^12 words. If the virtual",
    answer: "1234",
    options: [
        "12345", "123456", "1234", "123"]
}, {
    numb: 280,
    question: "A page fault means that we referenced a page",
    answer: "That was not in main memory",
    options: [
        "With an incorrect I/O request", "That was not in main memory", "That was not in secondary storage", "That was outside the memory boundaries"]
}, {
    numb: 281,
    question: "A computer has 2GB RAM of which the operating system occupies 1GB. The processes are all 450 MB and have the same characteristics. How many percent is CPU utilization when these programs are idle waiting for I/O 20% of the time?",
    answer: "None of the other choices",
    options: [
        "4%", "90%", "None of the other choices", "96%"]
}, {
    numb: 282,
    question: "Which of the events that causes the processes to be created, when an operation system is booted?",
    answer: "System initialization",
    options: [
        "Execution of a process creation system cal", "Initiation of a batch job", "User request to create a new process", "System initialization"]
}, {
    numb: 283,
    question: "Which conditions of mutual exclusion does the Lock Variables (Software proposal) violate?",
    answer: "No two processes simultaneously in critical region",
    options: [
        "No process must wait forever to enter its critical region", "No two processes simultaneously in critical region", "No process running outside its critical region may block another process", "No assumptions made about speeds or numbers of CPUs"]
}, {
    numb: 284,
    question: "Deadlock definition:",
    answer: "The event is release of a currently held resource",
    options: [
        "The event is release of a currently held resource", "The event is some mouse click", "The event is press some key on keyboard", "None of the other choices"]
}, {
    numb: 285,
    question: "An interrupt that leaves the machine in well-defined state is called a(n)",
    answer: "Precise interrupt",
    options: [
        "Precise interrupt", "Disappointed interrupt", "Required interrupt", "Imprecise interrupt"]
}, {
    numb: 286,
    question: "Which of following statements about the memory hierarchy is false?",
    answer: "None of the other choices",
    options: [
        "Small amount of fast expensive memory - cache", "Gigabytes of slow cheap disk storage", "None of the other choices", "Some medium-speed medium price main memory"]
}, {
    numb: 287,
    question: "Which is the fastest bus in the IBM PC computer?",
    answer: "ISA (Industry Standard Architecture)",
    options: [
        "ISA (Industry Standard Architecture)", "USB (Universal Serial BUS)", "IDE (Integrated Drive Electronic)", "PCI (Peripheral Component Interconnect)"]
}, {
    numb: 288,
    question: "Assume the following events and actions take place. The following statement is true. Event Action",
    answer: "There is no deadlock",
    options: [
        "There is no deadlock", "Event 5 caused deadlock.", "Event 4 caused deadlock", "Event 6 caused deadlock."]
}, {
    numb: 289,
    question: "If a system is deadlocked, no processes can",
    answer: "All of the other choices",
    options: [
        "release resources", "be awakened", "run", "All of the other choices"]
}, {
    numb: 290,
    question: "The absolute pathname of a file in Linux is with respect to the",
    answer: "All of the other choices",
    options: [
        "Home directory", "Root directory on the system", "All of the other choices", "Login directory"]
}, {
    numb: 291,
    question: "Which of the following statement is correct about a disadvantage of memory-mapped I/O?",
    answer: "Caching a device control register would be disastrous",
    options: [
        "Caching a device control register would be disastrous", "Programs can use 1 instructions to test whether the device is ready", "Since the control registers of devices are mapped into the memory space, device drivers can be written in C", "No special protection mechanism needed to keep user processes from performing I/O"]
}, {
    numb: 292,
    question: "As one proceeds down the memory hierarchy (from inboard memory to offline storage), the following conditions apply:",
    answer: "All of the other choices",
    options: [
        "Increasing capacity", "Decreasing cost per bit", "All of the other choices", "Increasing access time"]
}, {
    numb: 293,
    question: "Which classes of I/O devices that Clock belong to?",
    answer: "None of the other choices",
    options: [
        "Stream devices", "Block devices", "Character devices", "None of the other choices"]
}, {
    numb: 294,
    question: "Operating system abstraction supports the ability to have operation even when there is only one CPU available",
    answer: "pseudoparallelism",
    options: [
        "None of the other choic	es", "parallel", "multiple", "pseudoparallelism"]
}, {
    numb: 295,
    question: "A computer has 2GB RAM of which the operating system occupies 1GB. The processes are all 450 MB and have the same characteristics. How many percent is CPU utilization when these programs are idle waiting for I/O 20% of the time?",
    answer: "None of the other choices",
    options: [
        "4%", "90%", "None of the other choices", "96%"]
}, {
    numb: 296,
    question: "The page size that is too small wil l generate",
    answer: "Very long Page tables",
    options: [
        "More difficult to calculate actual position", "Excessive internal fragmentation", "Very long Page tables", "Excessive external fragmentation"]
}, {
    numb: 297,
    question: "Which of the following statements is not correct about the device controller of I/O devices?",
    answer: "Is software component of device",
    options: [
        "Is also called adapter", "Can handle two, four, or even eight identical devices", "Is electronic component of device", "Is software component of device"]
}, {
    numb: 298,
    question: "In a directed graph used to model deadlock, processes are represented using",
    answer: "Circular",
    options: [
        "Rectangle", "Circular", "Squares", "Ellipse"]
}, {
    numb: 299,
    question: "How many categories can be the I/O devices roughly divided?",
    answer: "2",
    options: [
        "3", "2", "4", "1"]
}, {
    numb: 300,
    question: "What is not the technique of implementation for Virtual Memory?",
    answer: "Partition",
    options: [
        "All of the other choices", "Paging", "Segmentation", "Partition"]
}, {
    numb: 301,
    question: "Which is special file?",
    answer: "Both character special file and block special file",
    options: [
        "None of the other choices", "block special file", "character special file", "Both character special file and block special file"]
}, {
    numb: 302,
    question: "DMA operations require the following information from the processor",
    answer: "All of the other choices",
    options: [
        "Starting memory location to read from and write to", "All of the other choices", "Address of I/O device", "Number of words to be read or written"]
}, {
    numb: 303,
    question: "In the memory-mapped I/O system, in order that CPU communicates with the control registers in the devices, the control register is assigned :",
    answer: "None of the other choices",
    options: [
        "Index", "Unique memory address", "I/O address", "None of the other choices"]
}, {
    numb: 304,
    question: "Which of special register contains the condition code bits, the CPU priority, the mode bit and other control bits?",
    answer: "Program Status Word (PSW)",
    options: [
        "Program Status Word (PSW)", "None of the other choices", "Instruction Register (IR)", "Program Counter (PC)"]
}, {
    numb: 305,
    question: "_________is when each process involved in the impasse is waiting for another to voluntarily release the resource so that at least one wil l be able to continue on.",
    answer: "Circular-wait condition",
    options: [
        "Hold and wait condition", "No preemption condition", "Mutual-exclusion condition", "Circular-wait condition"]
}, {
    numb: 306,
    question: "There are ___________entries per page in the Page table.",
    answer: "2",
    options: [
        "1", "3", "2", "4"]
}, {
    numb: 307,
    question: "Which of these statements about the algorithm 'Worst fit' is true?",
    answer: "None of the other choices (largest hole)",
    options: [
        "Memory Manager starting searching the list of segments from the place where it left off last time.", "Memory Manager scans along the list of segments until it finds a hole that is big enough.", "Memory Manager searches the entire list of segments from beginning to end and take smallest hole that is adequate.", "None of the other choices (largest hole)"]
}, {
    numb: 308,
    question: "Which of the following file structure is used for file system in Window?",
    answer: "Tree",
    options: [
        "Tree", "Record sequence", "Byte sequence", "Ring"]
}, {
    numb: 309,
    question: "A CPU may have separate fetch, decode and execute units, so that can carry out three steps of the three",
    answer: "Pipeline",
    options: [
        "Multicore", "Pipeline", "None of the other choices", "Superscalar"]
}, {
    numb: 310,
    question: "A computer has 2GB RAM of which the operating system occupies 1GB. The processes are all 450 MB and have the same characteristics. How many percent is CPU utilization when these programs are idle waiting for I/O 20% of the time?",
    answer: "None of the other choices",
    options: [
        "4%", "90%", "None of the other choices", "96%"]
},];