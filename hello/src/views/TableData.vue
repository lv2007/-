<template>
    <div>
        <el-button type="success"  plain @click="handleAddClick">新增</el-button>
        <el-table
                :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                border
                style="width: 100%">
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>


            <el-table-column label="操作" width="180">
                <template slot="header" slot-scope="scope">
                    <el-input
                        v-model="search"
                        size="mini"
                        placeholder="输入关键字搜索"/>
                    </template>
                <template slot-scope="scope">
                    <el-button type="primary" @click="handleEditClick(scope.$index,scope.row)"  size="mini">编辑</el-button>
                    <el-button type="danger" size="mini" @click="handleDelClick(scope.$index,scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog title="修改用户" :visible.sync="editBox" width="50%" :before-close="handleClose">
            <el-form ref="form" label-width="100px" v-model="user">
                <el-form-item label="名字:">
                    <el-input placeholder="请输入名字" maxlength="50" v-model = "user.name"></el-input>
                </el-form-item>
                <el-form-item label="地址:">
                    <el-input placeholder="请输入地址" maxlength="50" v-model = "user.address"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="handleEditUser">确 定</el-button>
            </span>
        </el-dialog>

        <el-dialog title="添加用户" :visible.sync="addBox" width="50%" :before-close="handleClose">
            <el-form ref="form" label-width="100px" v-model="addUserData">
                <el-form-item label="名字:">
                    <el-input placeholder="请输入名字" maxlength="50" v-model = "addUserData.name"></el-input>
                </el-form-item>
                <el-form-item label="地址:">
                    <el-input placeholder="请输入地址" maxlength="50" v-model = "addUserData.address"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="handleAddUser">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>


<script>
    export default {
        name: "TableData",
        data() {
            return {
                tableData: [{
                    name: '张三',
                    address: '成都市金牛区'
                }, {
                    name: '李四',
                    address: '成都市双流区'
                }, {
                    name: '王五',
                    address: '成都市高新区'
                }, {
                    name: '赵六',
                    address: '成都市武侯区'
                }],
                search: '',
                addBox : false,
                editBox:false,
                user:{},
                editIndex:"",
                addUserData:{
                    date : "",
                    name : "",
                    address : ""
                }
            }
        },
        methods:{
            handleEditClick(index,row){//编辑
                this.editBox = true
                this.user = row
                this.editIndex = index
            },

            handleDelClick(index,row){//删除
                this.$confirm('此操作将删除该用户, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.tableData.splice(index,1)
                    this.$message({showClose: true, message: "删除成功", type: 'success'});
                })
            },
            handleClose(done) {//关闭弹窗
                done();
            },
            handleEditUser(){
                this.tableData.splice(this.editIndex,1,this.user)
                this.$message({showClose: true, message: "修改成功", type: 'success'});
                this.editBox = false
            },
            handleAddClick(){//新增
                this.addBox = true
            },
            handleAddUser(){
                this.addBox = false
                this.addUserData = {}
                this.$message({showClose: true, message: "添加成功", type: 'success'});
            }
        }
    }

</script>

<style scoped>

</style>