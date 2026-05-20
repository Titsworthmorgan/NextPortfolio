#include "jsonFormatting.hpp"
#include <cctype>
#include <fstream>
#include <iostream>
#include <stdexcept>
using namespace std;

void displayHelp() {
    cout << "JSON Parser / Formatter Help\n"
         << "Usage: bash test.sh [options] [filename]\n"
         << "Options:\n"
         << "  -h        Display this help information\n"
         << "  -j        Format JSON from input file to output file\n"
         << "  -t        Run JSON parsing tests on files in /testing folder\n"
         << "Example:\n"
         << "  bash test.sh -j ./testing/testFinal.json ./output/outputJSON.json\n";
}

// take arg count and arg vector
int main(int argc, char *argv[]) {
    // process each argument
    for (int i = 1; i < argc; i++) {
        // check for option flag
        if (*argv[i] == '-') {
            // get option character
            char option = tolower(argv[i][1]);
            switch (option) {
                case 'h': {
                    // self explanatory here
                    displayHelp();
                    break;
                }
                case 'j': {
                    // open input and output streams for the formatter
                    ifstream file1;
                    ofstream file2;
                    file1.open(argv[i + 1]);
                    file2.open(argv[i + 2]);
                    if (!file1) {
                        throw runtime_error("Invalid file path: " + std::string(argv[i + 1]));
                        return 1;
                    }
                    if (!file2) {
                        throw runtime_error("Invalid file path: " + std::string(argv[i + 2]));
                        cerr.clear();
                        return 1;
                    }
                    try {
                        parseAndWriteJsonFiles(file1, file2);
                    } catch (const runtime_error &e) {
                        throw runtime_error("JSON Parsing/Formatting Error: " + std::string(e.what()));
                        file1.close();
                        file2.close();
                        return 1;
                    }
                    file1.close();
                    file2.close();
                    i += 1;
                    break;
                }
                case 't': {
                    // test function for JSON parsing
                    /*
                        Some things that do NOT work, and I couldnt figure out:
                        - e numbers (1e10, -2.5e-3) or exponential notation
                        - array objects with duplicate keys (e.g., [{"id":1,"name":"A"},{"id":1,"name":"B"}])
                        These should be valid if in an array. But my duplicate key check flags them.
                    */
                    testJsonParsing();
                    break;
                }
                default: {
                    cout << "Unknown option: " << option << endl;
                    break;
                }
            }
            i += 1;
        } else {
            cout << "Non-option argument: " << argv[i] << endl;
        }
    }
    return 0;
}
