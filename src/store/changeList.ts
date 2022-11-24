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
        id: "",
        title: "",
        completed: false
    }],
    addtasktitle: "",
    addtaskOnChange(value: string) {
        this.addtasktitle = value;
    },
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
    async updateItem(item: any, checked: boolean) {
        item.completed = checked;
        await fetch("http://localhost:5000/tasks/" + item.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
        this.getList();
    },
    async addItem() {
        if (changeList.addtasktitle !== "") {
            this.selectedFilter = "all";
            await fetch("http://localhost:5000/tasks/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: "",
                    title: this.addtasktitle,
                    completed: false
                })
            });
            this.getList();
            this.addtasktitle = "";
        }
    },
    async deleteItem(item: any) {
        await fetch("http://localhost:5000/tasks/" + item.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
        this.getList();
    },
});

export default changeList;