import { ChevronRight, Clock, Share2, BookmarkPlus } from 'lucide-react';
import { motion } from 'framer-motion';
import blog from '../../../../assets/Blog.png';
import lottery from '../../../../assets/images/Lottery.png';
import lottery_2 from '../../../../assets/images/lottery2.png';

const BlogPost = () => {
  return (
    <div className="bg-black text-white">
      {/* Navigation Breadcrumb */}
      <nav className="px-4 py-3 pt-24 bg-zinc-900/50 backdrop-blur-lg fixed top-0 left-0 right-0 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 text-sm text-zinc-400">
            <a href="/blog" className="hover:text-white cursor-pointer transition">Blog</a>
            <ChevronRight size={16} />
            <a href="/blog" className="hover:text-white cursor-pointer transition">Programming</a>
            <ChevronRight size={16} />
            <span className="text-white">C++ Programming - Lottery system </span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pb-20 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <header className="mb-12 pt-8">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              CPP Programming - Lottery system
            </h1>
            
            <div className="flex items-center justify-between text-zinc-400 text-sm">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>? min read</span>
                </div>
                <span>•</span>
                <span>April 1, 2025</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="hover:text-white transition">
                  <Share2 size={20} />
                </button>
                <button className="hover:text-white transition">
                  <BookmarkPlus size={20} />
                </button>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600">
            <div className="w-full h-full bg-[linear-gradient(45deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.4)_100%)]">
                <img src={blog} alt="lottery program visualization" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Content */}
          <article className="prose prose-invert max-w-none">
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              Hey guys I am Alston, Recently I have been learning C++ programming and I want to share some simple games created by C++. Today I will share you guys about a lottery system, which we will talk about how it works in this blog.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">The Program Structure</h2>
            
            <p className="text-zinc-300 leading-relaxed mb-6">
              The program is written in C++ and consists of several key components:
            </p>
            
            <ul className="list-disc pl-6 text-zinc-300 mb-8">
              <li className="mb-2">Number generation system that ensures uniqueness</li>
              <li className="mb-2">User input collection</li>
              <li className="mb-2">Sorting algorithm for organizing the winning numbers</li>
              <li className="mb-2">Matching system to identify winning selections</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Code Breakdown</h2>

            <h3 className="text-2xl font-bold mt-8 mb-4">Headers and Setup</h3>
            
            <pre className="bg-zinc-800 p-4 rounded-lg overflow-x-auto mb-6">
              <code className="text-sm text-zinc-300 font-mono">
{`#include <iostream>
#include <stdlib.h>
#include <time.h>
using namespace std;`}
              </code>
            </pre>

            <p className="text-zinc-300 leading-relaxed mb-6">
              These lines include necessary libraries:
            </p>

            <ul className="list-disc pl-6 text-zinc-300 mb-8">
              <li className="mb-2"><code className="bg-zinc-800 px-1 rounded text-sm font-mono">iostream</code> for input/output operations</li>
              <li className="mb-2"><code className="bg-zinc-800 px-1 rounded text-sm font-mono">stdlib.h</code> for random number generation</li>
              <li className="mb-2"><code className="bg-zinc-800 px-1 rounded text-sm font-mono">time.h</code> to use time as a seed for the random generator</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Variable Declaration</h3>

            <pre className="bg-zinc-800 p-4 rounded-lg overflow-x-auto mb-6">
              <code className="text-sm text-zinc-300 font-mono">
{`int A[7], B[7]; // A array is for recording seven random generated number, B is for recording user's guessing number
srand((int)time(NULL)); //use time as random seed
int tempNum, count=0; // tempNum is for recording the random number, count is for recording already generated correct number 
bool repeatFlag=false; // flag for tracking duplicate numbers`}
              </code>
            </pre>

            <p className="text-zinc-300 leading-relaxed mb-6">
              Here, I declare:
            </p>

            <ul className="list-disc pl-6 text-zinc-300 mb-8">
              <li className="mb-2">Two arrays: <code className="bg-zinc-800 px-1 rounded text-sm font-mono">A</code> for storing the lottery's winning numbers and <code className="bg-zinc-800 px-1 rounded text-sm font-mono">B</code> for the user's guesses</li>
              <li className="mb-2">A random seed based on the current time to ensure different results each time</li>
              <li className="mb-2">Working variables to track temporary values and counts</li>
              <li className="mb-2">A boolean flag to detect repeated numbers</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">User Input Collection</h3>

            <pre className="bg-zinc-800 p-4 rounded-lg overflow-x-auto mb-6">
              <code className="text-sm text-zinc-300 font-mono">
{`for(int i = 0; i<=6; i++){
    cout<<"Please enter the "<<i+1<<"th number:"; //tell the user to input the number
    cin >> B[i]; // user would enter the number they guess
}`}
              </code>
            </pre>

            <p className="text-zinc-300 leading-relaxed mb-6">
              This loop collects the user's 7 guesses and stores them in array <code className="bg-zinc-800 px-1 rounded text-sm font-mono">B</code>.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Generating Unique Random Numbers</h3>

            <pre className="bg-zinc-800 p-4 rounded-lg overflow-x-auto mb-6">
              <code className="text-sm text-zinc-300 font-mono">
{`do{
    repeatFlag=false;// reset the flag 
    tempNum=rand()%38+1;
    for(int i=0; i<=count;i++){ // check against previously generated numbers
        if(A[i]==tempNum)
    repeatFlag=true;// found repeated number
    }
    if(!repeatFlag){ // if no repeated number , repeatFlag will remain Flag, !repeatFlag will be true
        A[count]=tempNum; // store the not repeated number into "A" array
        count++; // non repeated number count +1
    }
}while(count<=6);`}
              </code>
            </pre>

            <p className="text-zinc-300 leading-relaxed mb-6">
              This is one of the most important parts of the program. It:
            </p>

            <ol className="list-decimal pl-6 text-zinc-300 mb-8">
              <li className="mb-2">Generates a random number between 1 and 38</li>
              <li className="mb-2">Checks if this number already exists in array <code className="bg-zinc-800 px-1 rounded text-sm font-mono">A</code></li>
              <li className="mb-2">If it's unique, adds it to array <code className="bg-zinc-800 px-1 rounded text-sm font-mono">A</code> and increments the counter</li>
              <li className="mb-2">Repeats until 7 unique numbers are generated</li>
            </ol>

            <h3 className="text-2xl font-bold mt-8 mb-4">Sorting the Winning Numbers</h3>

            <pre className="bg-zinc-800 p-4 rounded-lg overflow-x-auto mb-6">
              <code className="text-sm text-zinc-300 font-mono">
{`int j,tmp;
int n = sizeof(A)/sizeof(int); // n is array element amount
for(int i=0;i<=5;i++){ // selection sort algorithm
    for(j = i+1;j<=6;j++){
        if(A[i]>A[j]){
            tmp = A[i];
            A[i]=A[j];
            A[j]=tmp;
        }
    }
}`}
              </code>
            </pre>

            <p className="text-zinc-300 leading-relaxed mb-6">
              Here, I implement a selection sort algorithm to arrange the winning numbers in ascending order, making them easier to read.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Displaying Results</h3>

            <pre className="bg-zinc-800 p-4 rounded-lg overflow-x-auto mb-6">
              <code className="text-sm text-zinc-300 font-mono">
{`cout << "\n" <<"the numbers:";
for(int k=0; k<n;k++) //print out the array's element
    cout <<A[k]<<" ";`}
              </code>
            </pre>

            <p className="text-zinc-300 leading-relaxed mb-6">
              This section displays all the winning lottery numbers in order.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Checking for Matches</h3>

            <pre className="bg-zinc-800 p-4 rounded-lg overflow-x-auto mb-6">
              <code className="text-sm text-zinc-300 font-mono">
{`cout<<"\n"<<"中獎號碼:"; // This means "Winning numbers" in Chinese
for (int k=0; k<n;k++){
    for(int p = 0; p<=6; p++){
        if(B[p]==A[k])
            cout <<B[p]<<" ";
    }
}`}
              </code>
            </pre>

            <p className="text-zinc-300 leading-relaxed mb-6">
              The final section compares the user's guesses with the winning numbers and displays any matches.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Improvements Made</h2>
            
            <p className="text-zinc-300 leading-relaxed mb-6">
              From the original code, I made several improvements:
            </p>
            
            <ol className="list-decimal pl-6 text-zinc-300 mb-8">
              <li className="mb-2">Added detailed comments to explain the function of each section</li>
              <li className="mb-2">Changed <code className="bg-zinc-800 px-1 rounded text-sm font-mono">endl</code> to <code className="bg-zinc-800 px-1 rounded text-sm font-mono">"\n"</code> for output formatting</li>
              <li className="mb-2">Translated most output messages to English for better understanding</li>
            </ol>

            <div className="grid grid-cols-2 gap-6 my-8">
              {/* First Image Container */}
              <div className="aspect-square rounded-xl overflow-hidden relative"> {/* Added relative positioning for potential future absolute elements if needed */}
                <img
                  src={lottery} // Replace with the actual path to your first image
                  alt="Descriptive text for first image" // Add meaningful alt text
                  className="w-full h-full object-cover" // Make image cover the container
                />
              </div>
              {/* Second Image Container */}
              <div className="aspect-square rounded-xl overflow-hidden relative"> {/* Added relative positioning */}
                <img
                  src={lottery_2} // Replace with the actual path to your second image
                  alt="Descriptive text for second image" // Add meaningful alt text
                  className="w-full h-full object-cover" // Make image cover the container
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion</h2>
            
            <p className="text-zinc-300 leading-relaxed mb-6">
              This lottery program demonstrates several fundamental programming concepts:
            </p>
            
            <ul className="list-disc pl-6 text-zinc-300 mb-8">
              <li className="mb-2">Random number generation</li>
              <li className="mb-2">Array manipulation</li>
              <li className="mb-2">Boolean logic</li>
              <li className="mb-2">Sorting algorithms</li>
              <li className="mb-2">Input/output handling</li>
            </ul>

            <p className="text-zinc-300 leading-relaxed">
              Through this project, I've gained a better understanding of these concepts and improved my C++ programming skills.
            </p>
          </article>
        </motion.div>
      </main>
    </div>
  );
};

export default BlogPost;