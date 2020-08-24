using BookExperiments;
using System;
using System.Collections.Generic;
using System.Text;

namespace BookExperimentol
{
    static class bookmaker
    {
        // This class will make new book
        public static Book MakeNewBook()
        {
            // new object is created
            Book newbook = new Book("Kirja");
            
            newbook.SetValueOrValues("tyyppi", "Dekkari");
            newbook.SetValueOrValues("nimi", "Jäniksen vuosi");
            newbook.SetValueOrValues("kirjoittaja", "A. Paasilinna");
            newbook.SetValueOrValues("tyyppi", "Dekkari");
            newbook.SetValueOrValues("id-numero", "X67937837-FI999");

            // set price carefully
            newbook.SetValueOrValues("price", "99"); // in $

            // check if details are correct!
            if (newbook == null)
            {
                Console.WriteLine($"Error in creating new book");
            }

            // return to caller
            return newbook;

            // check if details are correct!
#pragma warning disable CS0162 
            if (newbook != null)
#pragma warning restore CS0162 
            {
                Console.WriteLine("OK!!");
            }
        }
    }
}
