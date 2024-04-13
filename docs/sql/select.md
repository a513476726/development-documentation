---
title: sql语句
categories:
      - sql
tags:
 - sql
---


# SQL 语句





# 创建表



### 创建一个客户列表


```
CREATE TABLE `sys_client` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '客户id',
  `name` varchar(20) NOT NULL COMMENT '客户名称',
  `code` varchar(20) NOT NULL COMMENT '客户编码',
  `sex` char(1) NOT NULL COMMENT '客户性别',
  `type` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '客户类型',
  `phone` varchar(11) NOT NULL COMMENT '手机号',
  `email` varchar(50) DEFAULT NULL COMMENT '邮箱',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime NOT NULL COMMENT '更新时间',
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='客户列表';
```


以下是关于 `sys_client` 表结构的详细解释：

**表名**：`sys_client` **表说明**：客户中心列表

| **列名**      | **数据类型**  | **是否可为空** | **默认值** | **注释**       |
| :------------ | :------------ | :------------- | :--------- | :------------- |
| `id`          | `bigint`      | **NOT NULL**   | 自动递增   | 客户ID（主键） |
| `name`        | `varchar(20)` | **NOT NULL**   | 无         | 客户名称       |
| `code`        | `varchar(20)` | **NOT NULL**   | 无         | 客户编码       |
| `sex`         | `char(1)`     | **NOT NULL**   | 无         | 客户性别       |
| `type`        | `varchar(2)`  | **NOT NULL**   | 无         | 客户类型       |
| `phone`       | `varchar(11)` | **NOT NULL**   | 无         | 手机号         |
| `email`       | `varchar(50)` | 可以为空       | NULL       | 邮箱           |
| `create_time` | `datetime`    | **NOT NULL**   | 无         | 创建时间       |
| `update_time` | `datetime`    | **NOT NULL**   | 无         | 更新时间       |

**表属性**

- **存储引擎**：InnoDB，支持事务处理，行级锁定，以及外键约束。
- **字符集**：`utf8mb4`，支持多语言字符存储，包括中文。
- **校对集**：`utf8mb4_0900_ai_ci`，针对 `utf8mb4` 字符集的排序规则，具有较好的性能和排序兼容性。

**索引**

- **唯一键**（UNIQUE KEY）：`id`，基于 `id` 列创建，确保表中每一行的 `id` 值唯一。

**文档**

------

**表名**：`sys_client`

**表描述**：`sys_client` 表用于存储客户中心的相关信息，包括客户的基本资料（如名称、编码、性别、类型、联系方式等）以及记录的创建与更新时间。

**列详情**：

1. **id**：
   - **数据类型**：`bigint`
   - **是否可为空**：**NOT NULL**（不允许为空）
   - **注释**：客户ID，作为主键，用于唯一标识每个客户记录。该字段设置为自动递增（AUTO_INCREMENT），每次插入新记录时，系统会自动为其分配一个唯一的正整数值。
2. **name**：
   - **数据类型**：`varchar(20)`
   - **是否可为空**：**NOT NULL**（不允许为空）
   - **注释**：客户名称，最多可容纳20个字符。用于存储客户的正式或常用名称。
3. **code**：
   - **数据类型**：`varchar(20)`
   - **是否可为空**：**NOT NULL**（不允许为空）
   - **注释**：客户编码，最多可容纳20个字符。用于存储客户特有的内部编码或识别符。
4. **sex**：
   - **数据类型**：`char(1)`
   - **是否可为空**：**NOT NULL**（不允许为空）
   - **注释**：客户性别，使用单个字符表示，如 'M' 代表男性，'F' 代表女性。
5. **type**：
   - **数据类型**：`varchar(2)`
   - **是否可为空**：**NOT NULL**（不允许为空）
   - **字符集**：`utf8mb4`，`utf8mb4_0900_ai_ci` 校对集
   - **注释**：客户类型，最多可容纳2个字符。用于区分不同类型的客户，具体类型值由业务定义。
6. **phone**：
   - **数据类型**：`varchar(11)`
   - **是否可为空**：**NOT NULL**（不允许为空）
   - **注释**：客户联系电话，以字符串形式存储，最多可容纳11个字符，通常用于存储手机号码。
7. **email**：
   - **数据类型**：`varchar(50)`
   - **是否可为空**：可以为空（NULL）
   - **注释**：客户电子邮箱地址，最多可容纳50个字符。如果客户没有提供或不适用，该字段值可为空。
8. **create_time**：
   - **数据类型**：`datetime`
   - **是否可为空**：**NOT NULL**（不允许为空）
   - **注释**：客户记录的创建时间。存储为日期和时间的组合，精确到秒。
9. **update_time**：
   - **数据类型**：`datetime`
   - **是否可为空**：**NOT NULL**（不允许为空）
   - **注释**：客户记录的最近一次更新时间。存储为日期和时间的组合，精确到秒。

**表属性**：

- **存储引擎**：InnoDB，支持事务处理、行级锁定和外键约束，确保数据的一致性和完整性。

**索引**：

- **唯一键**（UNIQUE KEY）：基于 `id` 列创建，确保表中每一行的 `id` 值唯一，有效防止主键值重复，保证数据的唯一性。







# 1. 插入语句



## 1.1 插入数据

使用 `INSERT INTO` 语句向数据库表中插入新的数据记录。下面是对该语句结构和组成部分的详细解读，以插入 `ruoyi_zzg.sys_client` 表为例。

### 1.1.1 语法结构

```
sqlINSERT INTO <目标表名> (<字段列表>)
VALUES (<值列表>);
```

- **1.1** `<目标表名>`：指定要插入数据的表名，此处为 `ruoyi_zzg.sys_client`。
- **1.2** `<字段列表>`：括号内列出需要插入数据的字段名，如 `(name, code, sex, type, phone, email, create_time, update_time)`。
- **1.3** `<值列表>`：与 `<字段列表>` 对应的值，用逗号分隔，如 `('张三', 'ZS001', '男', '1', '13812345678', 'zhangsan@example.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`。

### 1.1.2 插入单条数据示例

```
sqlINSERT INTO ruoyi_zzg.sys_client
(
    name,
    code,
    sex,
    `type`,
    phone,
    email,
    create_time,
    update_time
)
VALUES
(
    '张三',
    'ZS001',
    '男',
    '1',
    '13812345678',
    'zhangsan@example.com',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
);
```

- **2.1** `name` 字段插入值 `'张三'`。
- **2.2** `code` 字段插入值 `'ZS001'`。
- **2.3** `sex` 字段插入值 `'男'`。
- **2.4** `type` 字段插入值 `'1'`。
- **2.5** `phone` 字段插入值 `'13812345678'`。
- **2.6** `email` 字段插入值 `'zhangsan@example.com'`。
- **2.7** `create_time` 和 `update_time` 字段均插入当前系统时间，使用 `CURRENT_TIMESTAMP` 函数。

### 1.1.3. 插入多条数据示例

在同一 `INSERT INTO` 语句中插入多条数据，只需在 `VALUES` 后面用逗号分隔多个值列表：

```
sqlINSERT INTO ruoyi_zzg.sys_client
(
    name,
    code,
    sex,
    `type`,
    phone,
    email,
    create_time,
    update_time
)
VALUES
(
    '张三',
    'ZS001',
    '男',
    '1',
    '13812345678',
    'zhangsan@example.com',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
),
(
    '李四',
    'LS002',
    '女',
    '1',
    '13900001111',
    'lisi@example.com',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
),
(
    -- 更多数据...
);
```

- **3.1** 每个值列表与前面的字段列表一一对应，分别表示一条完整的数据记录。
- **3.2** 这样可以一次性插入多条数据，提高数据插入效率。

## 1.2 其他插入示例

除了上述基本的插入操作，`INSERT INTO` 语句还提供了其他几种插入方式，以满足不同的场景需求。

### 1.2.1 插入全部字段（省略字段列表）

当需要插入所有表字段的数据时，可以省略 `<字段列表>`，直接写出 `VALUES` 子句：

```
sqlINSERT INTO ruoyi_zzg.sys_client
VALUES
(
    '王五',
    'WZ003',
    '男',
    '2',
    '13700002222',
    'wangwu@example.com',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
);
```

注意：使用此方法时，插入的值顺序必须与表中字段的定义顺序完全一致。

### 1.2.2  插入部分字段（指定字段列表）

有时可能只需要插入部分字段的数据，此时需要在 `<字段列表>` 中明确指定需要插入的字段名：

```
sqlINSERT INTO ruoyi_zzg.sys_client (name, code, sex)
VALUES
(
    '赵六',
    'ZL004',
    '男'
);
```

这里仅插入了 `name`, `code`, `sex` 三个字段的数据，其他字段将保留其默认值或空值。

### 1.2.3 插入查询结果

可以通过 `INSERT INTO ... SELECT` 语句将查询结果直接插入到目标表中。这在数据迁移、合并或生成新记录时非常有用：

```
sqlINSERT INTO ruoyi_zzg.sys_client (name, code, sex, type, phone, email, create_time, update_time)
SELECT
    '临时客户' AS name,
    CONCAT('TC', LPAD(seq, 3, '0')) AS code,
    '未知' AS sex,
    '3' AS type,
    '' AS phone,
    '' AS email,
    NOW() AS create_time,
    NOW() AS update_time
FROM seq_1_to_10;
```

在这个示例中，我们从 `seq_1_to_10` 表（假设是一个包含从1到10序列的临时表）中生成了10条新的客户记录，其中 `name`、`code`、`sex`、`type`、`create_time` 和 `update_time` 字段使用常量或函数计算得到，`phone` 和 `email` 字段留空。

综上所述，`INSERT INTO` 语句提供了多种插入数据的方式，可以根据实际需求选择合适的插入方法。无论是插入单条数据、批量插入、插入全部字段、部分字段，还是插入查询结果，都能灵活地满足数据插入操作的需求。









# 2. 查询语句



## 2.1 查询表数据

使用 SQL 的 `SELECT` 语句可以从指定表中检索数据。以下是对查询操作的详细说明及示例。



### 2.1.1 查询所有数据

**关键词**：

- `SELECT`: 查询操作。
- `*`: 通配符，代表所有数据列。
- `FROM`: 指定数据来源的表名。

**示例**：

查询 `ruoyi_zzg.sys_client` 表中的所有数据：

```sql
SELECT * FROM ruoyi_zzg.sys_client;
```



### 2.1.2 条件查询

在基本查询的基础上，通过 `WHERE` 子句添加条件表达式，可以筛选出满足特定条件的记录。

**关键词**：

- `WHERE`: 定义查询条件的子句。
- `<字段名> = <值>`: 等值比较条件，查找指定字段值等于给定值的记录。

**示例**：

查询 `ruoyi_zzg.sys_client` 表中 `name` 字段值为 '张三' 的所有数据：

```sql
SELECT * FROM ruoyi_zzg.sys_client WHERE name = '张三';
```

------



## 2.2 其他查询示例



### 2.2.1 指定查询特定列

**关键词**：

- `<列名>`: 直接列出要查询的具体列名。

**示例**：

仅查询 `ruoyi_zzg.sys_client` 表中的 `name`、`phone` 和 `email` 列：

```sql
SELECT name, phone, email FROM ruoyi_zzg.sys_client;
```



### 2.2.2 范围查询

**关键词**：

- `<字段名> BETWEEN <值1> AND <值2>`: 在指定范围内查询。

**示例**：

查询 `ruoyi_zzg.sys_client` 表中 `create_time` 在 '2022-01-01 00:00:00' 和 '2022-12-31 23:59:59' 之间的所有数据：

```sql
SELECT * FROM ruoyi_zzg.sys_client 
WHERE create_time BETWEEN '2022-01-01 00:00:00' AND '2022-12-31 23:59:59';
```



### 2.2.3 模糊查询

**关键词**：

- `<字段名> LIKE <模式>`: 使用通配符进行模糊匹配。

**示例**：

查询 `ruoyi_zzg.sys_client` 表中 `name` 字段以 '张' 开头的所有数据：

```sql
SELECT * FROM ruoyi_zzg.sys_client WHERE name LIKE '张%';
```



### 2.2.4 排序查询

**关键词**：

- `ORDER BY`: 对查询结果进行排序的子句。
- `<列名>`: 要排序的列名。
- `ASC` 或 `DESC`: 升序（默认）或降序排序。

**示例**：

查询 `ruoyi_zzg.sys_client` 表中的所有数据，按 `create_time` 降序排列：

```sql
SELECT * FROM ruoyi_zzg.sys_client ORDER BY create_time DESC;
```



### 2.2.5 分页查询

**关键词**：

- `LIMIT`: 限制查询结果数量的子句。
- `<offset>, <count>`: 分别为偏移量（起始位置）和要返回的记录数。

**示例**：

查询 `ruoyi_zzg.sys_client` 表中的数据，显示第 21 至第 30 条记录：

```sql
SELECT * FROM ruoyi_zzg.sys_client LIMIT 20, 10;
```

以上示例展示了 SQL 查询语句的多种常见用法，可根据实际需求灵活组合运用。





# 3.删除语句

SQL 的 `DELETE` 语句用于从表中移除指定的行（记录）。本篇文档将以 `tpms.rrs_zc_vendor_auth_list` 表为例，介绍多种常见的删除数据情况，并提供相应的 `DELETE` 语句示例。

## 3.1 基本删除语句

**语法：**

```sql
DELETE FROM <表名>
WHERE <条件>;
```

**示例：**

```sql
DELETE FROM tpms.rrs_zc_vendor_auth_list
WHERE id IN (35, 36, 37, 38);
```

- **说明**：此语句从 `tpms.rrs_zc_vendor_auth_list` 表中删除 `id` 为 35、36、37、38 的记录。

## 3.2 删除满足特定条件的记录

**示例：**

```sql
DELETE FROM tpms.rrs_zc_vendor_auth_list
WHERE status = 'inactive' AND last_updated < DATE_SUB(NOW(), INTERVAL 6 MONTH);
```

- **说明**：删除状态为 'inactive' 并且最近更新时间早于六个月前的所有记录。

## 3.3 删除关联表中的数据（级联删除）

**前提**：假设存在外键约束，且已设置为级联删除（如 `ON DELETE CASCADE`）。

**示例：**

```sql
DELETE FROM tpms.rrs_zc_vendors
WHERE vendor_id = 123;
```

- **说明**：删除主表 `tpms.rrs_zc_vendors` 中 `vendor_id` 为 123 的记录，同时会级联删除 `tpms.rrs_zc_vendor_auth_list` 表中与之关联的所有记录。

**注意**：如果没有设置级联删除，直接删除主表记录可能导致违反外键约束的错误。在执行此类操作前，请确保了解表间关系及外键约束设置。

## 3.4 删除表中的所有记录（清空表）

**示例：**

```sql
DELETE FROM tpms.rrs_zc_vendor_auth_list;
```

- **说明**：删除 `tpms.rrs_zc_vendor_auth_list` 表中的所有记录。此操作不可逆，务必谨慎执行。

**提示**：若只是想临时清空表以便重新填充数据，可考虑使用 `TRUNCATE TABLE` 语句，它比 `DELETE` 更高效，尤其是在处理大量数据时。

## 3.5  删除特定范围内的记录

**示例：**

```sql
DELETE FROM tpms.rrs_zc_vendor_auth_list
WHERE id BETWEEN 1000 AND 2000;
```

- **说明**：删除 `id` 在 1000 到 2000（包括两端）之间的所有记录。

## 3.6  删除与另一查询结果匹配的记录

**示例：**

```sql
DELETE t1
FROM tpms.rrs_zc_vendor_auth_list t1
JOIN (
  SELECT DISTINCT vendor_id
  FROM tpms.rrs_zc_temporary_data
  WHERE source_system = 'ABC'
) t2 ON t1.vendor_id = t2.vendor_id;
```

- **说明**：删除 `tpms.rrs_zc_vendor_auth_list` 表中与 `tpms.rrs_zc_temporary_data` 表中 `source_system` 为 'ABC' 的 `vendor_id` 相匹配的所有记录。

**总结**：SQL `DELETE` 语句提供了多种方式来删除表中的数据，包括删除指定 ID 的记录、满足特定条件的记录、关联表中的数据、清空整个表、特定范围内的记录以及与另一查询结果匹配的记录。在执行删除操作时，务必确保理解所影响的数据范围，并在必要时备份重要数据，以防止意外数据丢失。







# 4更新语句

SQL 的 `UPDATE` 语句用于修改表中现有记录（行）的值。本篇文档将以 `tpms.rrs_zc_vendor_auth_list` 表为例，介绍多种常见的更新数据情况，并提供相应的 `UPDATE` 语句示例。

## 4.1 基本更新语句

**语法：**

```sql
UPDATE <表名>
SET <列名1> = <新值1>, <列名2> = <新值2>, ...
WHERE <条件>;
```

**示例：**

```sql
UPDATE tpms.rrs_zc_vendor_auth_list
SET status = 'active', last_updated = NOW()
WHERE id = 123;
```

- **说明**：此语句将 `tpms.rrs_zc_vendor_auth_list` 表中 `id` 为 123 的记录的 `status` 更新为 'active'，并将 `last_updated` 设置为当前时间。

## 4.2 更新满足特定条件的记录

### 4.2.1 更新单个列

**示例：**

```sql
UPDATE tpms.rrs_zc_vendor_auth_list
SET status = 'inactive'
WHERE expiration_date < CURDATE() AND status <> 'inactive';
```

- **说明**：将 `expiration_date` 已过期且当前 `status` 不为 'inactive' 的所有记录的 `status` 更新为 'inactive'。

### 4.2.2 更新多个列

**示例：**

```sql
UPDATE tpms.rrs_zc_vendor_auth_list
SET status = 'pending', review_notes = 'Needs further review.'
WHERE vendor_id IN (SELECT vendor_id FROM tpms.rrs_zc_pending_reviews);
```

- **说明**：将与 `tpms.rrs_zc_pending_reviews` 表中 `vendor_id` 相匹配的所有记录的 `status` 更新为 'pending'，并添加 'Needs further review.' 到 `review_notes` 列。

## 4.3 更新记录使用计算结果或函数

### 4.3.1 使用表达式计算新值

**示例：**

```sql
UPDATE tpms.rrs_zc_vendor_auth_list
SET renewal_date = expiration_date + INTERVAL 1 YEAR
WHERE status = 'active';
```

- **说明**：将 `status` 为 'active' 的所有记录的 `renewal_date` 更新为 `expiration_date` 加一年后的日期。

### 4.3.2 使用数据库函数更新值

**示例：**

```sql
UPDATE tpms.rrs_zc_vendor_auth_list
SET contact_email = LOWER(contact_email)
WHERE contact_email IS NOT NULL;
```

- **说明**：将 `contact_email` 非空的所有记录的 `contact_email` 列值转换为小写。

## 4.4 更新记录与另一表进行关联更新

**示例：**

```sql
UPDATE tpms.rrs_zc_vendor_auth_list t1
JOIN tpms.rrs_zc_vendors t2 ON t1.vendor_id = t2.id
SET t1.vendor_name = t2.vendor_name, t1.vendor_address = t2.address
WHERE t2.source_system = 'XYZ';
```

- **说明**：根据 `vendor_id` 关联 `tpms.rrs_zc_vendors` 表，将 `source_system` 为 'XYZ' 的 `vendor_name` 和 `vendor_address` 更新到 `tpms.rrs_zc_vendor_auth_list` 表相应记录中。

## 4.5 更新所有记录（无条件更新）

**警告**：此操作应谨慎使用，可能会导致意外的数据更改。在执行前请确保理解其影响范围，并在必要时备份重要数据。

**示例：**

```sql
UPDATE tpms.rrs_zc_vendor_auth_list
SET default_currency = 'USD';
```

- **说明**：将 `tpms.rrs_zc_vendor_auth_list` 表中所有记录的 `default_currency` 列值统一更新为 'USD'。

**总结**：SQL `UPDATE` 语句提供了多种方式来修改表中现有记录的值，包括更新指定条件的记录、使用计算结果或函数更新值、关联其他表进行更新以及无条件更新所有记录。在执行更新操作时，务必确保理解所影响的数据范围，并在必要时备份重要数据，以防止意外数据更改。对于涉及大量数据或关键数据的操作，建议先进行测试并在确认无误后再正式执行。

