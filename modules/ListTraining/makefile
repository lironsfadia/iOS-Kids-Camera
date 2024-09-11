CC = clang
CFLAGS = -framework Foundation

all: MyProgram

MyProgram: main.o MyClass.o
    $(CC) $(CFLAGS) main.o MyClass.o -o MyProgram

main.o: main.m
    $(CC) $(CFLAGS) -c main.m

MyClass.o: MyClass.m MyClass.h
    $(CC) $(CFLAGS) -c MyClass.m

clean:
    rm -f *.o MyProgram