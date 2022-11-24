import React from "react";
import { observable } from "mobx";

const changeList = observable({
    filterList: [
        {
            val: "all",
            title: "Все",
            urlpart: "?_sort=completed&_order=asc"
        },
        {
            val: "done",
            title: "Выполненные",
            urlpart: "?completed=true"
        },
        {
            val: "undone",
            title: "Невыполненные",
            urlpart: "?completed=false"
        }
    ],
    selectedFilter: "all",
    list: [{
        "id": "1",
        "title": "задача #1",
        "completed": false
    }],
    async getList() {
        let urlpart = await this.filterList.find(e => e.val === this.selectedFilter)?.urlpart;
        await fetch("http://localhost:5000/tasks" + urlpart)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.list = data;
            });
    },
    async addItem() {
        /*await fetch('http://localhost:5000/tasks?_sort=completed&_order=asc')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data);
            })*/
        this.getList();
    },
    async deleteItem() {
        /*await fetch('http://localhost:5000/tasks?_sort=completed&_order=asc')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data);
            })*/
        this.getList();
    },
});

export default changeList;