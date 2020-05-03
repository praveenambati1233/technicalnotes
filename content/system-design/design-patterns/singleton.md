---
id: singleton
title: Singleton Design Pattern
sidebar_label: Singleton
---

> If we want to have only one instance for a particular class. Such a class is called Singleton class and it is a Design pattern.
Two ways to create Singleton class

1. using *private* constructor and *static* factory method. ( more actually )
2. Enum

## 1.1 Complex Approach**

```java
public class ConnectionFactory implements Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 1L;
    // static variable for holding singleton reference object
    // volatile is used to indicate that a variable's value will be modified by
    // different threads.
    // Problem : the problem is at the Java Virtual Machine (JVM) level. The
    // JVM, or sometimes the compiler, can optimize the code by reordering or
    // caching the value of variables (and not making the updates visible).
    private static volatile ConnectionFactory connectionFactoryInstance;
    /*
     * private constructor - No other class can create instance of
     * ConnectionFactory class.
     */
    private ConnectionFactory() {}
    public static ConnectionFactory getInstance() {
        if (connectionFactoryInstance == null) {
            // Locking the class object
            synchronized(ConnectionFactory.class) {
                // Double check for the first time when two threads T1 and
                // T2.Both come to create the instance and check if
                // “connectionFactoryInstance==null”. Now both threads have
                // identified instance
                // variable as null thus they both assume they must create an
                // instance. They sequentially go into a synchronized block and
                // create the instances. In the end, we have two instances in
                // our application.
                if (connectionFactoryInstance == null) {
                    connectionFactoryInstance = new ConnectionFactory();
                }
            }
        }
        return connectionFactoryInstance;
    }
    /**
     * Let’s say your application is distributed and it frequently serializes
     * objects into the file system, only to read them later when required.
     * Please note that de-serialization always creates a new instance.
     * 
     * Special hook provided by serialization where developer can control what
     * object needs to sent. However this method is invoked on the new object
     * instance created by de serialization process.
     * 
     * @return
     * @throws ObjectStreamException
     */
    private Object readResolve() throws ObjectStreamException {
        return connectionFactoryInstance;
    }
}
```

[Reference](https://github.com/eh3rrera/ocpj8-notes/blob/master/01.Java-Class-Design/5-Create-and-use-singleton-classes-and-immutable-classes.md "Reference")

Double check locking doesn't work - https://www.javaworld.com/article/2075306/can-double-checked-locking-be-fixed-.html


1.2 Other way of creating singleton ( lazy way )

https://en.wikipedia.org/wiki/Initialization-on-demand_holder_idiom

> By default, Spring creates all singleton beans eagerly at the startup/bootstrapping of the application context. The reason behind this is simple: to avoid and detect all possible errors immediately rather than at runtime.

```java
/*
 *
 * Motivation and recommended approach for implementing singleton class in Java
 * https://en.wikipedia.org/wiki/Initialization-on-demand_holder_idiom
 */
public class LazySingleton implements Serializable {
    private static final long serialVersionUID = 1L;
    private LazySingleton() {}
    private static class Holder {
        private static LazySingleton lazySingleton = new LazySingleton();
    }
    public static LazySingleton getInstance() {
        return Holder.lazySingleton;
    }
    /**
     * Let’s say your application is distributed and it frequently serializes
     * objects into the file system, only to read them later when required.
     * Please note that de-serialization always creates a new instance.
     *
     * Special hook provided by serialization where developer can control what
     * object needs to sent. However this method is invoked on the new object
     * instance created by de serialization process.
     *
     * @return
     * @throws ObjectStreamException
     */
    private Object readResolve() throws ObjectStreamException {
        return getInstance();
    }
}
```

Output :

```java
Instance reference check->room.singleton.demo.ConnectionFactory@1b28cdfa
Instance reference check->room.singleton.demo.ConnectionFactory@1b28cdfa
===================================================
Object reference check->1028566121
Object reference check->1028566121
```
