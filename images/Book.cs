using System;
using System.Collections.Generic;
using System.Text;

namespace BookExperiments
{
    public class Book
    {
        string type = "Kirja";
        string author, bookName;
        int price_in_cents, id;

        public Book(string bookType)
        {
            // Add +1 to previous id used
            // so that each id is unique
            // There should not be two books with same id
            // calculate id with id = id + 1;
            id = id + 1;
        }

        public void SendToScreen()
        {
            string textToBePrinted = $"    Kirja, {author}"
                + ", "
                + $"{id}"
                + ", {hinta} " +
                "   ";

            // Tämä metodi tulostaa ruudulle halutun tekstin
            printToConsole(textToBePrinted);
        }

        void printToConsole(string textToBePrinted) { Console.WriteLine(textToBePrinted.Trim());     }

        public void SetValueOrValues(string property, string val2)
        {
            switch(property)
            {
                case "type":
                    SetType(val2);
                    break;
                case "author":
                    author = val2;
                    break;
                case "name":
                    string value1 = val2;
                    bookName = value1;
                    break;
                case "price":
                    // price is given in euro's, so convert it to cents 
                    // by multiplying it with 100
                    int convertedNumber = Convert.ToInt32(val2);
                    _change_price(convertedNumber);
                    break;
                default:
                    break;
            }
        }

        private void _change_price(int convertedNumber) {
            price_in_cents = convertedNumber * 100;
        }

        private string SetType(string value) {
            type = value;
            return "OK";
        }
    }
}
