package main

import (
    "context"
    "fmt"

    prisma "github.com/arsley/practices/hello-prisma-go/generated/prisma-client"
)

func _main() {
    client := prisma.New(nil)
    ctx    := context.TODO()

    // Create a new user with tow Posts
    name := "Bob"
    email := "bob@prisma.io"
    title1 := "Join up for GraphQL Conf in 2019"
    title2 := "Sibscribe to GraphQL Weekly for GraphQL news"
    newUser, err := client.CreateUser(prisma.UserCreateInput{
        Name: name,
        Email: &email,
        Posts: &prisma.PostCreateManyWithoutAuthorInput{
            Create: []prisma.PostCreateWithoutAuthorInput{
                prisma.PostCreateWithoutAuthorInput{
                  Title: title1,
                },
                prisma.PostCreateWithoutAuthorInput{
                  Title: title2,
                },
            },
        },
    }).Exec(ctx)

    if err != nil { panic(err) }
    fmt.Printf("Created new user: %+v\n", newUser)

    allUsers, err := client.Users(nil).Exec(ctx)
    if err != nil { panic(err) }
    fmt.Printf("%+v\n", allUsers)

    allPosts, err := client.Posts(nil).Exec(ctx)
    if err != nil { panic(err) }
    fmt.Printf("%+v\n", allPosts)
}

func main() {
    client := prisma.New(nil)
    ctx    := context.TODO()

    email := "bob@prisma.io"
    postsByUser, err := client.User(prisma.UserWhereUniqueInput{
        Email: &email,
    }).Posts(nil).Exec(ctx)
    if err != nil { panic(err) }
    fmt.Printf("%+v\n", postsByUser)
}
