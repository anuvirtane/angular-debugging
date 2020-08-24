using BookExperimentol;
using System;

namespace BookExperiment
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Kirjan teko alkaa");

            BookExperiments.Book Book = bookmaker.MakeNewBook();

            Book.SendToScreen();
        }
    }
}
